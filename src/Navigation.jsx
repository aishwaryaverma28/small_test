import React, { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navBox ${isMenuOpen ? 'open' : ''}`}>
      <h4>APP LOGO</h4>
      <div className='rightNav'>
        <p>DashBoard</p>
        <p>Create Ads</p>
      </div>
      <div className='menuToggle' onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </div>
    </div>
  );
};

const HamburgerIcon = () => (
  <div className='icon'>
    <div className='bar'></div>
    <div className='bar'></div>
    <div className='bar'></div>
  </div>
);

const CloseIcon = () => (
  <div className='icon'>
   <h4  className='close'>X</h4>
  </div>
);

export default Navigation;
