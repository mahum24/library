import React from 'react';
import { Box } from '@mui/material';

const SearchBar = ({ states, actions }) => {
    return (
        <Box style={{ padding: '20px', textAlign: 'center', backgroundColor: styles?.background }}>
            <input
                defaultValue={states.query}
                placeholder="Search products..."
                style={{ padding: '10px', width: '300px', fontSize: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
                onChange={(e)=>{states.setQuery(e.target.value); actions.handleSearch(e.target.value)}}
            />
        </Box>
    );
};

export default SearchBar;
