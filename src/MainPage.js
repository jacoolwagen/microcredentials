import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css'; // Make sure the CSS file is imported
import forestImage from './images/forest_main_back.png'; // Update with the correct path

const MainPage = () => {
    return (
        <div className="main-container" style={{ backgroundImage: `url(${forestImage})` }}>
            <nav className="navbar">
                <Link to="/minter" className="nav-link">Minter</Link>
                <Link to="/view-certificates" className="nav-link">View Certificates</Link>
                <Link to="/help" className="nav-link">Help</Link>
            </nav>
        </div>
    );
};

export default MainPage;
