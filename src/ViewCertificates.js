// ViewCertificates.js
import React from 'react';
import { Link } from 'react-router-dom';
// No need to import ViewCertificates.css since it doesn't exist

const ViewCertificates = () => {
  return (
    <div className="view-certificates-container"> {/* Use a common class or a new one for specific styling */}
      <nav className="navbar"> {/* Assume navbar and nav-link classes are globally styled */}
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/help" className="nav-link">Help</Link>
      </nav>
      <h1>Under Construction</h1>
      <p>This page is currently under construction. Please check back later for updates.</p>
    </div>
  );
};

export default ViewCertificates;
