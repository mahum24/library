import React from 'react';

const Button = ({ label, action }) => {
  console.log("Received action:",label, action);
  return (
    <button onClick={() => action() } style={{ padding: '10px', fontSize: '16px' }}>
      {label}
    </button>
  );
};

export default Button;
