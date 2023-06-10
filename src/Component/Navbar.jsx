import React from 'react';
import { Button, Typography, Grid, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
    navbar: {
        backgroundColor: '#6f6f6f',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        color: '#fff',
    },
    menu: {
        listStyleType: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    menuItem: {
        marginLeft: '20px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
};

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <Grid container alignItems="center">
                <Grid item xs={6} sm={9}>
                    <Button style={styles.link} component={Link} to="/">
                        <Typography fontSize={{ xs: '15px', md: '25px' }} fontWeight={700}>
                            VisualForces
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Hidden xsDown>
                        <ul style={styles.menu}>
                            <li style={styles.menuItem}>
                                <Link to="/" style={styles.link}>
                                    Home
                                </Link>
                            </li>
                            <li style={styles.menuItem}>
                                <Link to="/contact" style={styles.link}>
                                    Contact
                                </Link>
                            </li>
                            <li style={styles.menuItem}>
                                <Link to="/future" style={styles.link}>
                                    Future
                                </Link>
                            </li>
                        </ul>
                    </Hidden>
                </Grid>
            </Grid>
        </nav>
    );
};

export default Navbar;
