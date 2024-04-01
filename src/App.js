import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Minter from './Minter';
import Help from './Help'; // Import the Help component
import ViewCertificates from './ViewCertificates';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/minter" element={<Minter />} />
        <Route path="/view-certificates" element={<ViewCertificates />} />
        <Route path="/help" element={<Help />} /> {/* Add the Help route */}
        {/* Other routes... */}
      </Routes>
    </Router>
  );
};

export default App;
