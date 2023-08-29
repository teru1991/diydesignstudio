use serde::{Deserialize, Serialize};
use crate::models::rectangle::Rectangle;

// models/shape.rs
#[derive(Deserialize, Serialize, Clone)]
pub enum ShapeType {
    Rectangle(Box<Rectangle>),
    Circle(Box<Circle>),
    Triangle(Box<Triangle>),
    Cube(Box<Cube>),
    Sphere,
    Cylinder,
    // 他の図形もここに追加
}


#[derive(Serialize, Deserialize, Clone)] // Implement Serialize and Deserialize traits
pub struct ShapeData {
    pub userId: i32,
    pub designId: i32,
    pub shape_type: ShapeType,
    pub length: f32,
    pub width: f32,
    pub depth: Option<f32>,
    pub color: String,
    pub line_width: u32,
}



pub trait Shape {
    fn area(&self) -> f32;
    // 他の共通のメソッドもここに追加
}

pub trait ThreeDimensional {
    fn volume(&self) -> f32;
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Circle {
    pub radius: f32,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Triangle {
    pub base: f32,
    pub height: f32,
}

// 他の3D図形もここに追加
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Cube {
    pub side: f32,
}
