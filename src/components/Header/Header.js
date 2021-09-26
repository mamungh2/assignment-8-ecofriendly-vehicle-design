import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container header rounded p-2 text-center mt-4">
            <h1 className="text-primary mb-1">Eco-Friendly Vehicle Design Project</h1>
            <p className="mb-1">Save the world, save the mankind, so join this project.</p>
            <h3 className="mt-0">Total Budget: $300 million </h3>
        </div>
    );
};

export default Header;