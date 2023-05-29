import React, { useContext, useState } from 'react';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
// import SearchContext from './SearchContext';
import SearchContext from '../Context/SearchContext';

function Search() {
    const { setSearchValue } = useContext(SearchContext);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(inputValue);
        setInputValue('');
    };

    return (
        <Box display='flex' alignItems='center' justifyContent='center' paddingTop='20px'>
            <Paper component="form" sx={{ p: '2px 10px', display: 'flex', width: '50%' }} onSubmit={handleSubmit}>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <AccountCircleIcon fontSize='large' />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search User"
                    inputProps={{ 'aria-label': 'search user' }}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" >
                    <SearchIcon fontSize='large' />
                </IconButton>
            </Paper>
        </Box>
    );
}

export default Search;
