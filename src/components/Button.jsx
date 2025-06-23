import React from 'react';

const Button = ({ label }) => {
  return (
    <button onClick={() => console.log("heregvbhnjbghvbjh")} style={{ padding: '10px', fontSize: '16px' }}>
      {label}
    </button>
  );
};

export default Button;
