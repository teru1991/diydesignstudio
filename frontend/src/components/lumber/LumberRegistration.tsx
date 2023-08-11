import React, {useState} from 'react';

interface LumberProps {
    onRegister: (lumber: { name: string; length: number; width: number; height: number }) => void;
}

const LumberRegistration: React.FC<LumberProps> = ({onRegister}) => {
    const [name, setName] = useState('');
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleSubmit = () => {
        onRegister({name, length, width, height});
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

export default LumberRegistration;
