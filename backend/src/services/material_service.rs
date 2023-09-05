use tokio_postgres::{NoTls};
use crate::services::design_service::ServiceError as DesignServiceError;
use tokio::task;
use serde::Serialize;
use crate::models::material::Material;

// Define ValidationError variant for ServiceError
#[derive(Debug)]
pub enum ServiceError {
    DatabaseError(tokio_postgres::Error),
    ValidationError(String),
}

impl From<tokio_postgres::Error> for ServiceError {
    fn from(error: tokio_postgres::Error) -> Self {
        ServiceError::DatabaseError(error)
    }
}

// 材料の取得
pub async fn get_materials_by_user_id(user_id: i32) -> Result<Vec<Material>, ServiceError> {
    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    let materials = client
        .query("SELECT id, user_id, name, description FROM Materials WHERE user_id = $1", &[&user_id])
        .await?
        .iter()
        .map(|row| Material {
            id: row.get(0),
            user_id: row.get(1),
            name: row.get(2),
            description: row.get(3),
            length: 0.0,  // ダミーの値を設定
            width: 0.0,   // ダミーの値を設定
            height: 0.0,  // ダミーの値を設定
        })
        .collect();

    Ok(materials)
}

// 材料の更新
pub async fn update_material_by_name_and_user_id(material: &Material, user_id: i32) -> Result<(), ServiceError> {
    if material.name.is_empty() {
        return Err(ServiceError::ValidationError("Invalid material data".to_string()));
    }

    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    client
        .execute(
            "UPDATE Materials SET name = $1, description = $2 WHERE name = $1 AND user_id = $3",
            &[&material.name, &material.description, &user_id],
        )
        .await?;

    Ok(())
}

// 材料の削除
pub async fn delete_material_by_name_and_user_id(material_name: &str, user_id: i32) -> Result<(), ServiceError> {
    if material_name.is_empty() {
        return Err(ServiceError::ValidationError("Invalid material name".to_string()));
    }

    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    client
        .execute(
            "DELETE FROM Materials WHERE name = $1 AND user_id = $2",
            &[&material_name, &user_id],
        )
        .await?;

    Ok(())
}

// 以下の関数の実装はまだ提供されていないため、適宜実装してください。

// PostgreSQLの材料データを更新するロジック
pub async fn update_material_by_id(material_data: &Material) -> Result<(), ServiceError> {
    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    client
        .execute(
            "UPDATE Materials SET name = $1, length = $2, width = $3, height = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5",
            &[&material_data.name, &material_data.length, &material_data.width, &material_data.height, &material_data.id],
        )
        .await?;

    Ok(())
}

// PostgreSQLから材料データを削除するロジック
pub async fn delete_material_by_id(material_id: i32) -> Result<(), ServiceError> {
    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    client
        .execute(
            "DELETE FROM Materials WHERE id = $1",
            &[&material_id],
        )
        .await?;

    Ok(())
}

// PostgreSQLから材料データを取得するロジック
pub async fn get_material_by_id(material_id: i32) -> Result<Material, ServiceError> {
    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    let row = client
        .query_one("SELECT id, user_id, name, length, width, height FROM Materials WHERE id = $1", &[&material_id])
        .await?;

    Ok(Material {
        id: row.get(0),
        user_id: row.get(1),
        name: row.get(2),
        description: row.get(3),
        length: row.get(4),  // 追加
        width: row.get(5),   // 追加
        height: row.get(6),  // 追加
        // 他のフィールドも追加
    })
}

// PostgreSQLに材料データを保存するロジック
pub async fn create_material_in_db(material_data: &Material) -> Result<Material, ServiceError> {
    let (client, connection) = get_database_client().await?;

    let result = client
        .execute(
            "INSERT INTO Materials (user_id, name, description, length, width, height) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id",
            &[&material_data.user_id, &material_data.name, &material_data.description, &material_data.length, &material_data.width, &material_data.height],
        )
        .await?;

    if let Err(e) = connection.await {
        eprintln!("connection error: {}", e);
    }

    Ok(Material { id: result as i32, ..material_data.clone() })
}


async fn get_database_client() -> Result<(tokio_postgres::Client, tokio::task::JoinHandle<()>), ServiceError> {
    let (client, connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    let join_handle = tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    Ok((client, join_handle))
}