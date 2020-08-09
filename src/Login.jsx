import React, {useState} from "react";
import {Button, FormGroup, FormControl, FormLabel} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import {useHistory} from "react-router";
import IconButton from "@material-ui/core/IconButton";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        history.push("/")
    }

    return (
        <div>
            <CssBaseline/>
            <Typography variant="h5" style={{padding:("10px", "10px")}}>
                kontakt base
            </Typography>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="top"
                style={{minHeight: '100vh', marginTop:"50px"}}
            >

                <Grid item xs={3}>
                    <Typography variant="h6">Login</Typography>
                    <FormControl
                        margin="normal"
                    >
                        <TextField disabled label="License"/>
                        <TextField disabled label="Email"/>
                        <TextField disabled label="Password"/>
                        <Button style={{marginTop:"20px"}} variant="contained" onClick={handleSubmit}>Submit</Button>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}
