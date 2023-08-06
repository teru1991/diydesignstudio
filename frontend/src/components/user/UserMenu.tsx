import React from 'react';

interface UserMenuProps {
    // Props type definitions go here
}

const UserMenu: React.FC<UserMenuProps> = (props) => {
    // Component logic goes here

    return (
        <div>
            <button onClick={() => console.log("Login")}>Login</button>
            <button onClick={() => console.log("Logout")}>Logout</button>
        </div>
    );
};

export default UserMenu;
