use actix_web::web;
use crate::handlers::create_shape;

pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::resource("/create-shape")
            .route(web::post().to(create_shape))
    );
    // 今後、図形に関連する他のエンドポイントが必要になった場合、
    // ここに追加していきます。
}
