import React from 'react';
import { Button as MUIButton } from '@mui/material';

const Button = ({ label, action }) => {
  console.log("Received action:", label, action);
  return (
    <MUIButton
      onClick={action}
      variant="contained"
      size="medium"
      sx={{ padding: '10px', fontSize: '16px',  backgroundColor: '#1976d2', }}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
