import React, {useState} from 'react';

interface DepthInputProps {
    onDepthChange: (depth: number) => void;
}

const DepthInput: React.FC<DepthInputProps> = ({onDepthChange}) => {
    const [depth, setDepth] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDepth = Number(e.target.value);
        setDepth(newDepth);
        onDepthChange(newDepth);
    };

    return (
        <div>
            <input type="number" placeholder="深さ" value={depth} onChange={handleChange}/>
        </div>
    );
};

export default DepthInput;
