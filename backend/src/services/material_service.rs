// services/material_service.rs

use crate::models::material::Material;
use tokio_postgres::{NoTls, Client};

pub async fn create_material(material_data: &Material) -> Result<(), ServiceError> {
    // PostgreSQLに材料データを保存するロジックをここに追加します。
}

pub async fn update_material(material_data: &Material) -> Result<(), ServiceError> {
    // PostgreSQLの材料データを更新するロジックをここに追加します。
}

pub async fn delete_material(material_id: i32) -> Result<(), ServiceError> {
    // PostgreSQLから材料データを削除するロジックをここに追加します。
}

pub async fn get_material(material_id: i32) -> Result<Material, ServiceError> {
    // PostgreSQLから材料データを取得するロジックをここに追加します。
}
