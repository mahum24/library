import React from 'react';

const Card = ({ title, description, children, style = {} }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      ...style
    }}>
      {title && <h2 style={{ margin: '0 0 10px' }}>{title}</h2>}
      {description && <p style={{ marginBottom: '10px' }}>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
