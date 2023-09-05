mod handlers;
mod services;
mod models;
mod errors;

use actix_web::{App, HttpServer, web};
use actix_web::middleware::Logger;
use env_logger;

use crate::handlers::material_handlers::{
    register_material,
    edit_material,
    retrieve_material,
    remove_material,
};
use crate::handlers::design_handlers::{
    save_shape,
    save_temp_shape,
    save_final_shape
};
use crate::handlers::user_handlers::{
    register_user,
    authenticate_user
};


#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_web=debug");
    env_logger::init();
    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default())
            .route("/materials/register", web::post().to(register_material))
            .route("/materials/edit", web::put().to(edit_material))
            .route("/materials/{id}", web::get().to(retrieve_material))
            .route("/materials/{id}", web::delete().to(remove_material))
            .route("/create-shape", web::post().to(save_shape))
            .route("/save-temp-shape", web::post().to(save_temp_shape))
            .route("/save-final-shape", web::post().to(save_final_shape))
            .route("/users/register", web::post().to(register_user))
            .route("/users/authenticate", web::post().to(authenticate_user))
    })
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
