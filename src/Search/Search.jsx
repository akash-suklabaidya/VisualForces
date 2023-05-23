import * as React from 'react';
import { useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, InputBase } from '@mui/material';
import SearchContext from '../Context/SearchContext';

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <SearchContext.Provider value={searchQuery} >
            <Box display='flex' alignItems='center' justifyContent='center' paddingTop='20px'>
                <Paper component="form" sx={{ p: '2px 10px', display: 'flex', width: '50%' }} onSubmit={handleSubmit}>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <AccountCircleIcon fontSize='large' />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search User"
                        inputProps={{ 'aria-label': 'search user' }}
                        onChange={handleInputChange}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon fontSize='large' />
                    </IconButton>
                </Paper>
            </Box>
        </SearchContext.Provider>
    );
}
