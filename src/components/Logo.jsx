
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <Link to="/" className={`logo logo-${size}`}>
      <img 
        src="/lovable-uploads/7a59c123-35a9-4ddd-b11c-fe5ca8e73419.png" 
        alt="Driftmood Coffee" 
        className="logo-image"
      />
    </Link>
  );
};

export default Logo;
