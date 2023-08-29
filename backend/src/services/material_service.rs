// services/material_service.rs

use crate::models::material::Material;
use tokio_postgres::{Client, NoTls, Error as PostgresError};
use serde_json::Value as JsonValue;


// 材料の取得
pub async fn get_materials(user_id: i32) -> Result<Vec<Material>, ServiceError> {
    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres dbname=design_database", NoTls)
            .await?;

    let materials = client
        .query("SELECT name, length, width, height FROM Materials WHERE user_id = $1", &[&user_id])
        .await
        .map_err(|e| ServiceError::DatabaseError(e))?
        .iter()
        .map(|row| Material {
            name: row.get(0),
            length: row.get(1),
            width: row.get(2),
            height: row.get(3),
        })
        .collect();

    Ok(materials)
}

// 材料の更新
pub async fn update_material(material: &Material, user_id: i32) -> Result<(), ServiceError> {
    if material.name.is_empty() || material.length <= 0.0 || material.width <= 0.0 || material.height <= 0.0 {
        return Err(ServiceError::ValidationError("Invalid material data".to_string()));
    }

    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres dbname=design_database", NoTls)
            .await?;

    client
        .execute(
            "UPDATE Materials SET name = $1, length = $2, width = $3, height = $4, updated_at = CURRENT_TIMESTAMP WHERE name = $1 AND user_id = $5",
            &[&material.name, &material.length, &material.width, &material.height, &user_id],
        )
        .await
        .map_err(|e| ServiceError::DatabaseError(e))?;

    Ok(())
}

// 材料の削除
pub async fn delete_material(material_name: &str, user_id: i32) -> Result<(), ServiceError> {
    if material_name.is_empty() {
        return Err(ServiceError::ValidationError("Invalid material name".to_string()));
    }

    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres dbname=design_database", NoTls)
            .await?;

    client
        .execute(
            "DELETE FROM Materials WHERE name = $1 AND user_id = $2",
            &[&material_name, &user_id],
        )
        .await
        .map_err(|e| ServiceError::DatabaseError(e))?;

    Ok(())
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

pub async fn create_material(material_data: &Material) -> Result<Material, ServiceError> {
    // ここでPostgreSQLに材料データを保存するロジックを追加します。
}

// 材料の登録
pub async fn create_material(material_data: &Material) -> Result<Material, ServiceError> {
    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres dbname=design_database", NoTls)
            .await?;

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    client
        .execute(
            "INSERT INTO Materials (name, length, width, height) VALUES ($1, $2, $3, $4)",
            &[&material_data.name, &material_data.length, &material_data.width, &material_data.height],
        )
        .await?;

    Ok(material_data.clone())
}