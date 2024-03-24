import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RentButton.css'; 

const RentButton = ({ sneaker }) => {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate('/rental-page', { state: { sneaker } });
  }

  return (
    <div className='rent_btn'>
      <button onClick={handleRentClick}>RENT</button>
    </div>
    
  );
};

export default RentButton;
