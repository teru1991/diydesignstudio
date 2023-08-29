import React, {useState} from 'react';
import {registerMaterial} from "../../services/MaterialService";

interface MaterialProps {
    onRegister: (lumber: { name: string; length: number; width: number; height: number }) => void;
}

const MaterialRegistration: React.FC<MaterialProps> = ({onRegister}) => {
    const [name, setName] = useState('');
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleSubmit = async () => {
        try {
            const response = await registerMaterial({name, length, width, height});
            onRegister(response); // バックエンドからのレスポンスを親コンポーネントに渡す
        } catch (error) {
            console.error("Error registering material:", error);
        }
    };
    return (
        <div>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Length" onChange={(e) => setLength(Number(e.target.value))}/>
            <input type="number" placeholder="Width" onChange={(e) => setWidth(Number(e.target.value))}/>
            <input type="number" placeholder="Height" onChange={(e) => setHeight(Number(e.target.value))}/>
            <button onClick={handleSubmit}>Register</button>
        </div>
    );
};

export default MaterialRegistration;
