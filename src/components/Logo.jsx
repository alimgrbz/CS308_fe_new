
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <Link to="/" className={`logo logo-${size}`}>
      <h1>Driftmood Coffee</h1>
    </Link>
  );
};

export default Logo;
