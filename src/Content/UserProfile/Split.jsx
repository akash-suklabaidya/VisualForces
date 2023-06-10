import React from 'react';
import UserProfile from './UserProfile.jsx';
import Stats from '../Stats Page/Stats.jsx';
import { Grid } from '@mui/material';

const SplitScreen = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <UserProfile />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Stats />
            </Grid>
        </Grid>
    );
};

export default SplitScreen;



