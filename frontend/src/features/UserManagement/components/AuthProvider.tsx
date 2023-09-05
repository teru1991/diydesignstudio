// AuthProvider.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    authContent: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ authContent }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        // 実際のログインロジックをここに書く
        setIsAuthenticated(true);
    };

    const logout = () => {
        // 実際のログアウトロジックをここに書く
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {authContent}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
