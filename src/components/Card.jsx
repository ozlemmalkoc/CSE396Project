import React from 'react';

const cardStyle = {
  backgroundColor: '#f5f5f5',
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '200px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const photoStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const moduleStyle = {
  fontWeight: 'bold',
  fontSize: '20px', // Adjusted font size to be smaller
  marginBottom: '5px',
};

const Card = ({ member }) => {
  const { name, lastName, modules, photo } = member;

  return (
    <div style={cardStyle} className="card">
      <div style={{ color: '#333' }}className="card-info">
        <h3 className="card-name">{`${name} ${lastName}`}</h3>
        <p style={moduleStyle}>Modules:</p>
        {modules.map((module, index) => (
          <p key={index} className="card-modules">
            {module}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
