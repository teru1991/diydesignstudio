import {useEffect, useState} from "react";
import axios from 'axios';


const useShapeAPIHandler = (
    shapeParams: any, 
    color: string, 
    lineWidth: number,
    validateShapeParams: (params: any) => boolean
) => {
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [responseData, setResponseData] = useState(null);

    const sendDataToBackend = async () => {
        if (isSent) return;

        const dataToSend = {
            shapeParams,
            color,
            lineWidth
        };

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/create-shape', dataToSend);

            if (response.status === 200) {
                setIsSent(true);
                setResponseData(response.data);
            } else {
                setError("An unexpected error occurred");
            }
        } catch (error: any) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (validateShapeParams(shapeParams) && color && lineWidth > 0) {
            sendDataToBackend();
        }
    }, [shapeParams, color, lineWidth]);

    return {
        isAllDataFilled: validateShapeParams,
        sendData: sendDataToBackend,
        loading,
        error,
        responseData
    };
};

export default useShapeAPIHandler;
