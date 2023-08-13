use actix_web::web;
use crate::handlers::{create_shape_3d, update_shape_3d, delete_shape_3d, get_shape_3d};

pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/shapes/3d")
            .route(web::post().to(create_shape_3d))
            .route(web::put().to(update_shape_3d))
            .route(web::delete().to(delete_shape_3d))
            .route(web::get().to(get_shape_3d))
    );
}
