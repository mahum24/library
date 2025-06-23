import React from 'react';
import { Box } from '@mui/material';

const Products = ({ prop, actions }) => {

    return (
        <Box style={{ padding: '20px', backgroundColor: styles?.background }}>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                {prop.displayitems.map((product, index) => (
                    <li key={index} style={{ border: '1px solid #eee', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.2rem', color: styles?.titleColor }}>{product.name}</h3>
                        <p style={{ color: styles?.descColor }}>{product.description}</p>

                        <button
                            onClick={actions.handleBuy}
                            data-payload={product}
                            style={{
                                marginTop: '10px',
                                padding: '10px 16px',
                                backgroundColor: styles?.buttonBg || '#1976d2',
                                color: styles?.buttonColor || '#fff',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer',
                                fontSize: '0.95rem'
                            }}
                        >
                            Buy Now
                        </button>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default Products;
