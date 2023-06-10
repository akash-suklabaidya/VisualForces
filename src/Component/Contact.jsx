import React from "react";
import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
} from "@mui/material";


const Contact = () => {
    return (
        <div className="contact">
            <Grid container justifyContent="center">
                <Grid item xs={12} sm={8} md={6} lg={4}>
                    <Card elevation={5} style={{ padding: "20px" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" textAlign="center">
                                Contact
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                gutterBottom
                            >
                                Fill up the form if you have any queries and I will get back to
                                you within 24 hours.
                            </Typography>
                            <form
                                action="https://getform.io/f/092f9cb3-e7e9-4288-9973-1f49ef22dd61"
                                method="POST"
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            placeholder="Enter first name"
                                            label="First Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            name="FirstName"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            placeholder="Enter last name"
                                            label="Last Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            name="lastName"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            type="email"
                                            placeholder="Enter email"
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            name="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Message"
                                            multiline
                                            rows={4}
                                            placeholder="Type your message here"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            name="Message"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                        >
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Contact;
