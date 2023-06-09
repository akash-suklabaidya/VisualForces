import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p style={styles.text}>
                &copy; {new Date().getFullYear()}
                <span style={styles.brand} > VisualForces.</span>
                All rights reserved.
            </p>
            <p style={styles.text}>
                Developed with love ❤️ by <a style={styles.link} target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/akash-suklabaidya-435aa5227/'
                >Akash</a>
            </p>
            <p  >
                <a style={styles.linkIcon} href='https://www.instagram.com/akash_sb__/' target="_blank" rel="noopener noreferrer" >
                    <InstagramIcon />
                </a>
                <a style={styles.linkIcon} href='https://www.facebook.com/akash.suklabaidya.31/' target="_blank" rel="noopener noreferrer" >
                    <FacebookIcon />
                </a>
                <a style={styles.linkIcon} href='https://www.linkedin.com/in/akash-suklabaidya-435aa5227/' target="_blank" rel="noopener noreferrer" >
                    <LinkedInIcon />
                </a>
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
    },
    text: {
        fontSize: '14px',
        color: '#555555',
        marginBottom: '8px',
    },
    link: {
        color: '#0076cc',
        textDecoration: 'none',
        marginRight: '8px',
    },
    linkIcon: {
        color: '#555555',
        textDecoration: 'none',
        marginRight: '8px',
    },
    brand: {
        fontSize: '25px'
    }
};

export default Footer;
