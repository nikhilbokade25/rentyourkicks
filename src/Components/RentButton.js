import React from 'react';
import { Link } from 'react-router-dom';
import './RentButton.css'; 

const RentButton = ({ to, children }) => {
  return (
    <Link to={to} className="rent_btn">
      <button>{children}RENT</button>
    </Link>
  );
};

export default RentButton;
