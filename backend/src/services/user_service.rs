use crate::models::user::User;
use crate::services::design_service::ServiceError;
use crate::errors::custom_error::CustomError;
use bcrypt::{hash, verify};
use tokio_postgres::NoTls;

pub async fn register_user(user_data: &User) -> Result<User, ServiceError> {
    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    let password_hash = hash(&user_data.password_hash, 4).unwrap();

    client
        .execute(
            "INSERT INTO Users (username, email, password_hash) VALUES ($1, $2, $3)",
            &[&user_data.username, &user_data.email, &password_hash],
        )
        .await?;

    Ok(user_data.to_owned())
}

pub async fn authenticate_user(email: &str, password: &str) -> Result<User, ServiceError> {
    let (client, _connection) =
        tokio_postgres::connect("host=localhost UserAuth=postgres dbname=design_database", NoTls)
            .await?;

    let user = client
        .query_one("SELECT id, username, email, password_hash FROM Users WHERE email = $1", &[&email])
        .await?;

    let user_data = User {
        id: user.get(0),
        username: user.get(1),
        email: user.get(2),
        password_hash: user.get(3),
    };

    if verify(password, &user_data.password_hash).unwrap() {
        Ok(user_data.to_owned())
    } else {
        Err(ServiceError::Custom(CustomError("Invalid email or password".to_string())))
    }
}
