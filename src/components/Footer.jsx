// components/Footer.jsx

import React from 'react';

const footerStyle = {
  position: 'fixed',
  right: 0,
  bottom: 0,
  left: 0,
  padding: 0,
  height: '26px',
  textAlign: 'center',
  backgroundColor: 'orange',
  color: 'black',
  borderTop: '2px solid green',
};

const Footer = () => {
  return (
    <footer>
      <div style={footerStyle}>
        <span>© {'Development of a SCARA Robotic Arm for Painting and Interactive Gameplay'}</span>
      </div>
    </footer>
  );
};

export default Footer;
