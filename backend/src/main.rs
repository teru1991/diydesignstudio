mod handlers;
mod services;
mod models;

use actix_web::{App, HttpServer, web};
use crate::handlers::design_handlers::{save_shape, save_temp_shap, save_final_shape};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/materials/register", web::post().to(register_material))
            .route("/materials/edit", web::put().to(edit_material))
            .route("/materials/{id}", web::get().to(retrieve_material))
            .route("/materials/{id}", web::delete().to(remove_material))
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}