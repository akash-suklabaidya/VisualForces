import React from 'react';
import { Typography, Container, Box, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h4: {
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
        },
        h5: {
            fontSize: '1.875rem',
            fontWeight: 600,
            marginBottom: '0.75rem',
        },
        body1: {
            fontSize: '1rem',
            marginBottom: '0.75rem',
        },
    },
});

const FutureScope = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: '4px', mb: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Future Scopes
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Our website has a bright future ahead with several exciting scopes and possibilities. Here are some of the key areas we plan to explore and enhance:
                    </Typography>
                </Box>
                <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: '4px', mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        1. Performance Comparison:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Comparing the performance of multiple Codeforces users based on their ratings, solve counts, accuracy, and contest rankings. One can generate side-by-side visualizations or tables to highlight the differences in performance between users.
                    </Typography>
                </Box>

                <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: '4px', mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        2. Friend Recommendation System:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Building a recommendation system that suggests Codeforces friends based on user profiles, problem-solving history, and mutual connections. One can leverage user ratings, solve counts, common problem submissions, and other metrics to identify potential friends for oneself.
                    </Typography>
                </Box>
                <Box sx={{ p: 2, backgroundColor: '#fff', borderRadius: '4px', mb: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        3. Predictive Modeling:
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Use machine learning techniques to predict users' future ratings based on their past performance, contest history, and problem-solving patterns. We can train a model using historical data and evaluate its accuracy in predicting rating changes for users.
                    </Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default FutureScope;
