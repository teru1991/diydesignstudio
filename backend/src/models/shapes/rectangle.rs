use serde::{Deserialize, Serialize};
use crate::models::shape::Shape;
use crate::models::shape::ThreeDimensional;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct RectangleForCreation {
    pub length: f32,
    pub width: f32,
    pub depth: f32,
}

impl Shape for RectangleForCreation {
    fn area(&self) -> f32 {
        self.length * self.width
    }
}

impl ThreeDimensional for RectangleForCreation {
    fn volume(&self) -> f32 {
        self.length * self.width * self.depth
    }
}
