import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Header = ({ prop, styles }) => {
  return (
    <header style={{ backgroundColor: styles?.background, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', color: styles?.linkColor }}>MyBrand</h1>
    <nav style={{ display: 'flex', gap: '1.5rem' }}>
      {prop.links.map((link, index) => (
        <a key={index} href={link.url} style={{ color: styles?.linkColor, textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = styles?.linkHoverColor} onMouseOut={(e) => e.target.style.color = styles?.linkColor}>
          {link.label}
        </a>
      ))}
    </nav>
  </header>
  );
};

export default Header;
