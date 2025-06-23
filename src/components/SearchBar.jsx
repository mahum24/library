import React from 'react';
import { Box } from '@mui/material';

const SearchBar = ({ query, actions }) => {
    return (
        <Box style={{ padding: '20px', textAlign: 'center', backgroundColor: styles?.background }}>
            <input
                defaultValue={query}
                placeholder="Search products..."
                style={{ padding: '10px', width: '300px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
                onChange={actions.handleSearch}
            />
        </Box>
    );
};

export default SearchBar;
