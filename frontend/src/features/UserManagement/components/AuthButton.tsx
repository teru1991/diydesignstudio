// AuthButton.tsx

import React from 'react';
import { useAuth} from "./AuthProvider";

const AuthButton: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <button onClick={isAuthenticated ? logout : login}>
            {isAuthenticated ? 'Logout' : 'Login'}
        </button>
    );
};

export default AuthButton;
