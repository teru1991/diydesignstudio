// services/design_service.rs
use actix_web::HttpResponse;
use mongodb::{Client as OtherClient, options::ClientOptions, Database};
use std::error::Error;
use std::fmt;
use tokio_postgres::{NoTls, Client};
use tokio_postgres::error::Error as PostgresError;
use crate::models::shape::{ShapeData, ShapeType};
use crate::models::shape::{Shape, ThreeDimensional};

#[derive(Debug)]
struct CustomError(String);

impl fmt::Display for CustomError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl Error for CustomError {}

enum ServiceError {
    DatabaseError(tokio_postgres::Error),
    Custom(CustomError),
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


pub async fn save_shape_to_mongo(shape_data: &ShapeData) -> Result<(), mongodb::error::Error> {
    let client_options = ClientOptions::parse("mongodb://localhost:27017").await?;
    let client = OtherClient::with_options(client_options)?;
    let db = client.database("design_database");
    let collection = db.collection::<ShapeData>("TemporaryDesignData");

    let result = collection.insert_one(shape_data.clone(), None).await?;
    Ok(())
}

pub async fn save_shape_to_postgres(shape_data: &ShapeData) -> Result<(), ServiceError> {
    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres dbname=design_database", NoTls)
            .await?;

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

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
