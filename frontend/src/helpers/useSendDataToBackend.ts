import { useEffect } from 'react';
import axios from 'axios';

const useSendDataToBackend = (
    shapeType: string,
    shapeParams: any,
    selectedLumber: any,
    color: string,
    lineWidth: number,
    depth: number | null
) => {
    // 入力が完了しているか確認するヘルパー関数
    const isInputComplete = () => {
        return shapeType && Object.keys(shapeParams).length > 0 && (selectedLumber || depth !== null) && color && lineWidth;
    };

    // バックエンドへデータを送信する関数
    const sendDataToBackend = async () => {
        if (isInputComplete()) {
            const payload = {
                shapeType,
                shapeParams,
                selectedLumber,
                color,
                lineWidth,
                depth
            };
            try {
                await axios.post('http://localhost:8080/create-shape', payload);
            } catch (error) {
                console.error("Error sending data to backend:", error);
            }
        }
    };

    // 入力情報の変更を検知して、バックエンドへデータを送信
    useEffect(() => {
        sendDataToBackend();
    }, [shapeType, shapeParams, selectedLumber, color, lineWidth, depth]);
};

export default useSendDataToBackend;
