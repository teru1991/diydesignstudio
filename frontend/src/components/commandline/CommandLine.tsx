// CommandLine.tsx
import React, { useState } from 'react';

interface CommandLineProps {
    onCommandSubmit: (command: string) => void;
}

const CommandLine: React.FC<CommandLineProps> = ({ onCommandSubmit }) => {
    const [command, setCommand] = useState('');

    const handleSubmit = () => {
        onCommandSubmit(command);
        setCommand('');
    };

    return (
        <div>
            <input value={command} onChange={(e) => setCommand(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CommandLine;
