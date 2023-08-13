use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub enum ShapeType {
    Circle,
    Rectangle,
    Triangle,
    // ... 他の図形も追加する
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Shape {
    pub shape_type: ShapeType,
    pub parameters: Parameters,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Parameters {
    // Common parameters for all shapes
    pub color: Option<String>,

    // Specific parameters for each shape type
    pub radius: Option<f32>,
    pub width: Option<f32>,
    pub height: Option<f32>,
    // ... 他のパラメータも追加する
}
