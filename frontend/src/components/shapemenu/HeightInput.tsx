import React, {useState} from 'react';

interface HeightInputProps {
    onHeightChange: (height: number) => void;
}

const HeightInput: React.FC<HeightInputProps> = ({onHeightChange}) => {
    const [height, setHeight] = useState(0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(e.target.value);
        setHeight(newHeight);
        onHeightChange(newHeight);
    };

    return (
        <div>
            <input type="number" placeholder="Height" value={height} onChange={handleChange}/>
        </div>
    );
};

export default HeightInput;
