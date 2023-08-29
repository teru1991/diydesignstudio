// models/material.rs

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Material {
    pub id: i32,          // 材料の一意のID
    pub user_id: i32,     // 材料を登録したユーザーのID
    pub name: String,     // 材料の名前
    pub description: Option<String>,  // 材料の説明
    // 他の必要なフィールドもここに追加できます。
}
