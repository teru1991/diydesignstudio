use actix_web::{web, HttpResponse, Result};
use crate::models::material::Material;
use serde::Deserialize;
use crate::services::material_service::{
    get_materials_by_user_id,
    update_material_by_name_and_user_id,
    delete_material_by_name_and_user_id,
    create_material_in_db,
    update_material_by_id,
    delete_material_by_id,
    get_material_by_id,
};
use serde::Serialize;
use serde_json;

// 材料の取得
pub async fn get_materials() -> Result<HttpResponse> {
    match get_materials_by_user_id(1).await {
        Ok(materials) => {
            let serialized_materials: Vec<String> = materials.iter()
                .map(|m| serde_json::to_string(m)) // Serialize each material to a JSON string
                .collect::<Result<Vec<String>, _>>()?; // Collect results and handle potential errors
            Ok(HttpResponse::Ok().json(serialized_materials))
        }
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().into())
        }
    }
}

// 材料の更新
pub async fn update_material(material_data: web::Json<Material>) -> Result<HttpResponse> {
    let user_id = 1; // 仮のユーザー ID
    match update_material_by_name_and_user_id(&material_data.0, user_id).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material updated successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error updating material"))
        }
    }
}


// 材料の削除
pub async fn delete_material(material_name: web::Path<String>) -> Result<HttpResponse> {
    let user_id = 1; // 仮のユーザー ID
    match delete_material_by_name_and_user_id(&material_name.into_inner(), user_id).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material deleted successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error deleting material"))
        }
    }
}

pub async fn register_material(material_data: web::Json<Material>) -> Result<HttpResponse> {
    match create_material_in_db(&material_data).await {
        Ok(material) => Ok(HttpResponse::Ok().json(material)),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().into())
        }
    }
}

pub async fn edit_material(material_data: web::Json<Material>) -> Result<HttpResponse> {
    let user_id = 1; // 仮のユーザー ID
    match update_material_by_name_and_user_id(&material_data, user_id).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material updated successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error updating material"))
        }
    }
}

pub async fn remove_material(material_id: web::Path<i32>) -> Result<HttpResponse> {
    match delete_material_by_id(material_id.into_inner()).await {
        Ok(_) => Ok(HttpResponse::Ok().json("Material deleted successfully")),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error deleting material"))
        }
    }
}

pub async fn retrieve_material(material_id: web::Path<i32>) -> Result<HttpResponse> {
    match get_material_by_id(material_id.into_inner()).await {
        Ok(material) => Ok(HttpResponse::Ok().json(material)),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            Ok(HttpResponse::InternalServerError().json("Error retrieving material"))
        }
    }
}
