import React from 'react';

type Props = {
  label: string;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 16px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
      }}
    >
      {label}
    </button>
  );
};

export default Button;
