// services/shape_service.rs
use crate::models::shape::{Shape, ShapeType, ThreeDimensional};
use crate::models::shapes::rectangle::RectangleForCreation;
use crate::models::shapes::circle::CircleForCreation;

pub fn calculate_and_display(shape: &ShapeType) {
    match shape {
        ShapeType::Rectangle(rect) => {
            (**rect).display_area();  // Note the double dereference **rect
            // rect.display_volume(); If Rectangle implements the ThreeDimensional trait
        },
        ShapeType::Circle(circle) => {
            (**circle).display_area();
            // If Circle implements the ThreeDimensional trait
            // (**circle).display_volume();
        },
        // handle other shapes similarly...
        _ => println!("Other shape type."),
    }
}
