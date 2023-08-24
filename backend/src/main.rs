mod handlers;
mod services;
mod models;

use actix_web::{App, HttpServer, web};
use crate::handlers::design_handlers::save_shape; // create_rectangleからsave_shapeに変更

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/save_shape", web::post().to(save_shape)) // エンドポイントの名前を変更
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}