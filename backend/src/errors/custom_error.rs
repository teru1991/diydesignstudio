use std::fmt;
use std::error::Error;

#[derive(Debug)]
pub struct CustomError(pub String);

impl CustomError {
    pub fn new(msg: &str) -> CustomError {
        CustomError(msg.to_string())
    }
}

impl fmt::Display for CustomError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl std::error::Error for CustomError {}
