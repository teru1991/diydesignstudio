// handlers/design_handlers.rs
use crate::services::design_service;
use crate::models::shape::ShapeData;
use actix_web::{web, HttpResponse, Responder};
use serde::Deserialize;
use crate::services::design_service::{save_shape_to_mongo, save_shape_to_postgres};
use tokio_postgres::Client;

#[derive(Deserialize)]
pub struct ShapeRequest {
    shape_data: ShapeData,
}

pub async fn save_shape(params: web::Json<ShapeRequest>) -> impl Responder {
    design_service::save_shape(&params.shape_data)
}


pub async fn save_temp_shape(web::Json(shape_data): web::Json<ShapeData>) -> Result<HttpResponse, actix_web::Error> {
    match save_shape_to_mongo(&shape_data).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Temp shape saved successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json(format!("Error saving temp shape: {:?}", e))) // エラーメッセージに詳細を追加
        }
    }
}

pub async fn save_final_shape(web::Json(shape_data): web::Json<ShapeData>, client: web::Data<Client>) -> Result<HttpResponse, actix_web::Error> {
    match save_shape_to_postgres(&client, &shape_data).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Final shape saved successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json(format!("Error saving final shape: {:?}", e))) // エラーメッセージに詳細を追加
        }
    }
}
