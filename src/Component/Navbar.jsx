import React from 'react';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



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
            <div>
                <Typography
                    fontSize={{ xs: '15px', md: '25px' }}
                    fontWeight={700}
                >
                    VisualForces
                </Typography>
            </div>
            <ul style={styles.menu}>
                <li style={styles.menuItem}>
                    <a href="/" style={styles.link}>
                        Home
                    </a>
                </li>
                <li style={styles.menuItem}>
                    Contact
                </li>

                <li style={styles.menuItem}>
                    <a href="#" style={styles.link}>
                        Future
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;