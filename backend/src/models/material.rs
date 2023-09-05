// models/material.rs
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Material {
    pub id: i32,
    pub user_id: i32,
    pub name: String,
    pub description: String,
    pub length: f64,
    pub width: f64,
    pub height: f64,
}