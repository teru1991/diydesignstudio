use crate::services::user_service;
use crate::models::user::User;
use actix_web::{web, HttpResponse, Responder};
use serde::Deserialize;

#[derive(Deserialize)]
pub struct UserRequest {
    user_data: User,
}

pub async fn register_user(params: web::Json<UserRequest>) -> HttpResponse {
    match user_service::register_user(&params.user_data).await {
        Ok(_) => HttpResponse::Ok().json("User registered successfully"),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            HttpResponse::InternalServerError().json("Error registering UserAuth")
        }
    }
}

pub async fn authenticate_user(params: web::Json<UserRequest>) -> HttpResponse {
    match user_service::authenticate_user(&params.user_data.email, &params.user_data.password_hash).await {
        Ok(_) => HttpResponse::Ok().json("User authenticated successfully"),
        Err(e) => {
            eprintln!("Error: {:?}", e);
            HttpResponse::InternalServerError().json("Error authenticating UserAuth")
        }
    }
}
