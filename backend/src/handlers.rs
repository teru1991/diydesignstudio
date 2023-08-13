use actix_web::{web, HttpResponse, Responder};
use crate::models::{Shape, ShapeType, Parameters};

pub async fn create_shape(shape: web::Json<Shape>) -> impl Responder {
    // ここで図形の作成ロジックを実装します。
    // 例えば、図形のタイプに応じて特定の計算を行うなど。

    match shape.shape_type {
        ShapeType::Circle => {
            // Circleに関するロジック
            let radius = shape.parameters.radius.unwrap_or(0.0);
            // ... 他の計算や処理
        },
        ShapeType::Rectangle => {
            // Rectangleに関するロジック
            // ...
        },
        // ... 他の図形に関するロジックも追加する
        _ => {}
    }

    HttpResponse::Ok().json(shape.into_inner())
}
