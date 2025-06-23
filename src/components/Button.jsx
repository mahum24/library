import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ label, action }) => {
  console.log("Received action:", label, action);
  return (
    <MUIButton
      onClick={action}
      variant="outline"
      size="medium"
      style={{ padding: '10px', fontSize: '16px',  backgroundColor: '#1976d2', }}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
