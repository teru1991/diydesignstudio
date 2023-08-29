// handlers/design_handlers.rs

use crate::services::design_service;
use crate::models::shape::ShapeData;
use actix_web::{web, HttpResponse, Responder};
use serde::Deserialize;
use crate::models::shape::ShapeType;
use crate::services::design_service::save_shape_to_mongo;
use crate::services::design_service::save_shape_to_postgres;

#[derive(Deserialize)]
pub struct ShapeRequest {
    shape_type: ShapeType,
    length: f32,
    width: f32,
    depth: Option<f32>,
    color: String,
    line_width: u32,
}

pub async fn save_shape(params: web::Json<ShapeRequest>) -> impl Responder {
    let shape_data = ShapeData {
        userId: 1, // 仮のユーザーID
        designId: 1, // 仮のデザインID
        shape_type: params.shape_type.clone(),
        length: params.length,
        width: params.width,
        depth: params.depth,
        color: params.color.clone(),
        line_width: params.line_width,
    };
    design_service::save_shape(&shape_data)
}

async fn save_temp_shape(web::Json(shape_data): web::Json<ShapeData>) -> Result<HttpResponse> {
    match save_shape_to_mongo(&shape_data).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Temp shape saved successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error saving temp shape"))
        }
    }
}

async fn save_final_shape(web::Json(shape_data): web::Json<ShapeData>) -> Result<HttpResponse> {
    match save_shape_to_postgres(&shape_data).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Final shape saved successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error saving final shape"))
        }
    }
}