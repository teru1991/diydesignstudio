use serde::{Deserialize, Serialize};
use crate::models::shape::Shape;
use crate::models::shape::ThreeDimensional;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CircleForCreation {
    pub radius: f32,
    pub depth: f32,
}

impl Shape for CircleForCreation {
    fn area(&self) -> f32 {
        3.14159 * self.radius * self.radius
    }
}

impl ThreeDimensional for CircleForCreation {
    fn volume(&self) -> f32 {
        3.14159 * self.radius * self.radius * self.depth
    }
}
