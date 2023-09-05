use std::fmt;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize,Debug,Clone)]
pub struct User {
    pub id: i32,
    pub username: String,
    pub email: String,
    pub password_hash: String,
}
#[derive(Debug)]
pub struct CustomError(String);

impl fmt::Display for CustomError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl std::error::Error for CustomError {}