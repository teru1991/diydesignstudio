import axios from 'axios';

interface ShapeData {
    // Define the properties and their types that your shapeData should have
    // For example:
    id: number;
    name: string;
    // ... other properties
}
// バックエンドとの通信を行う関数
export const saveShape = async (shapeData:ShapeData) => {
    try {
        const response = await axios.post('http://localhost:8080/save_shape', shapeData);
        return response.data;
    } catch (error) {
        console.error("Error saving shape:", error);
        throw error;
    }
};
// MongoDBに図形のデータを一時的に保存
export const saveTempShape = async (shapeData:ShapeData) => {
    try {
        const response = await axios.post('http://localhost:8080/save_temp_shape', shapeData);
        return response.data;
    } catch (error) {
        console.error("Error saving temp shape:", error);
        throw error;
    }
};

// PostgreSQLに確定した図形のデータを保存
export const saveFinalShape = async (shapeData:ShapeData) => {
    try {
        const response = await axios.post('http://localhost:8080/save_final_shape', shapeData);
        return response.data;
    } catch (error) {
        console.error("Error saving final shape:", error);
        throw error;
    }
};