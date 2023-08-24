use serde::{Deserialize, Serialize};
use crate::models::shape::Shape;
use crate::models::shape::ThreeDimensional;

#[derive(Debug, Serialize, Deserialize,Clone)] // Deserialize を追加
pub struct Rectangle {
    pub length: f32,
    pub width: f32,
    pub depth: f32,
}

impl Shape for Rectangle {
    fn area(&self) -> f32 {
        self.length * self.width
    }
}

impl ThreeDimensional for Rectangle {
    fn volume(&self) -> f32 {
        self.length * self.width * self.depth
    }
}