use actix_web::App;
use crate::routes::shape_3d_routes;

pub fn configure_app(app: App<()>) -> App<()> {
    app.configure(shape_3d_routes::init)
    // 今後、他のルーティングやミドルウェアの設定が必要になった場合、
    // ここに追加していきます。
}
