use actix_web::HttpResponse;
use mongodb::{Client as OtherClient, options::ClientOptions, Database, error::Error as MongoError};
use std::error::Error;
use std::fmt;
use tokio_postgres::{NoTls, Client, Transaction};
use crate::models::shape::{ShapeData, ShapeType};
use crate::errors::custom_error::CustomError;
use crate::models::shape::{ThreeDimensional,Shape};

#[derive(Debug)]
pub enum ServiceError {
    DatabaseError(tokio_postgres::Error),
    Custom(CustomError),
    MongoError(MongoError),
}

impl From<tokio_postgres::Error> for ServiceError {
    fn from(err: tokio_postgres::Error) -> Self {
        ServiceError::DatabaseError(err)
    }
}

impl From<CustomError> for ServiceError {
    fn from(err: CustomError) -> Self {
        ServiceError::Custom(err)
    }
}

impl From<MongoError> for ServiceError {
    fn from(err: MongoError) -> Self {
        ServiceError::MongoError(err)
    }
}

pub fn save_shape(shape_data: &ShapeData) -> HttpResponse {
    match &shape_data.shape_type {
        ShapeType::Rectangle(ref inner_rectangle) => {
            let area = inner_rectangle.area();
            let volume = inner_rectangle.volume();

            HttpResponse::Ok().json(format!(
                "Rectangle area: {}, volume: {}",
                area,
                volume
            ))
        }
        _ => HttpResponse::BadRequest().json("Unsupported shape type"),
    }
}

pub async fn save_shape_to_mongo(shape_data: &ShapeData) -> Result<(), ServiceError> {
    let client_options = ClientOptions::parse("mongodb://localhost:27017").await?;
    let client = OtherClient::with_options(client_options)?;
    let db = client.database("design_database");
    let collection = db.collection::<ShapeData>("TemporaryDesignData");

    collection.insert_one(shape_data.clone(), None).await?;
    Ok(())
}

pub async fn save_shape_to_postgres(client: &Client, shape_data: &ShapeData) -> Result<(), ServiceError> {
    let serialized_shape_data = serde_json::to_string(&shape_data).map_err(|e| {
        eprintln!("Serialization error: {}", e);
        ServiceError::from(CustomError(e.to_string()))
    })?;

    client
        .execute(
            "INSERT INTO Designs (userId, designId, shapes) VALUES ($1, $2, $3)",
            &[&shape_data.userId, &shape_data.designId, &serialized_shape_data],
        )
        .await?;

    Ok(())
}

pub async fn save_shape_with_transaction<'a>(
    transaction: &'a Transaction<'_>,
    shape_data: &ShapeData,
) -> Result<(), ServiceError> {
    let serialized_shape_data = serde_json::to_string(&shape_data).map_err(|e| {
        eprintln!("Serialization error: {}", e);
        ServiceError::from(CustomError::new(&e.to_string()))
    })?;

    transaction
        .execute(
            "INSERT INTO Designs (userId, designId, shapes) VALUES ($1, $2, $3)",
            &[&shape_data.userId, &shape_data.designId, &serialized_shape_data],
        )
        .await?;

    Ok(())
}
