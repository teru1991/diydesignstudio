import React from 'react';
import Header from "./components/Header/Header";
import MainContent from "./components/Main/MainContent";
import LoginForm from "../UserManagement/components/LoginForm";// 仮定したユーザー認証コンポーネントの名前
import "../TopPage/styles/TopPage.scss";
const ParentComponent: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return (
            <>
                <Header />
                <MainContent />
                {/* 他のコンポーネントやコンテンツもここに追加 */}
            </>
        );
    } else {
        return <LoginForm />;
    }
};

export default ParentComponent;
