import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
