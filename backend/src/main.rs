mod models;
mod handlers;
mod config;
mod routes;

use actix_web::{App, HttpServer};
use crate::config::configure_app;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let app = App::new();
        configure_app(app) // ここでルーティングやミドルウェアの設定を行う
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
