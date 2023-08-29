// handlers/material_handlers.rs

use actix_web::{web, HttpResponse, Result};
use crate::models::material::Material;
use crate::services::material_service::{create_material, update_material, delete_material, get_material};

async fn register_material(web::Json(material_data): web::Json<Material>) -> Result<HttpResponse> {
    match create_material(&material_data).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material registered successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error registering material"))
        }
    }
}

async fn edit_material(web::Json(material_data): web::Json<Material>) -> Result<HttpResponse> {
    match update_material(&material_data).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material updated successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error updating material"))
        }
    }
}

async fn remove_material(web::Path(material_id): web::Path<i32>) -> Result<HttpResponse> {
    match delete_material(material_id).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material deleted successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error deleting material"))
        }
    }
}

async fn retrieve_material(web::Path(material_id): web::Path<i32>) -> Result<HttpResponse> {
    match get_material(material_id).await {
        Ok(material) => Ok(HttpResponse::Ok().json(material)),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error retrieving material"))
        }
    }
}
