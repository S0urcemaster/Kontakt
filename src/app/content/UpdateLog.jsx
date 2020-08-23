import React from "react";
import Paper from "@material-ui/core/Paper";
import {Grid, Typography} from "@material-ui/core";

export default function UpdateLog () {
    return (
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Working (18.08.2020)</Typography>
                    <ul>
                        <li>Account search through API request to digi-craft/customerboard</li>
                        <li>Display account details</li>
                        <li>Account history in left drawer (beta)</li>
                    </ul>
                    <Typography variant="body1">Test data: 101 biggest companies in Baden-Wuerttemberg</Typography>
                    <Typography variant="body1">Hours spent: 45,3</Typography>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Montag, 17.08.2020</Typography>
                    <ul>
                        <li>Account Search Beta</li>
                        <li>Display Account (missing test data)</li>
                        <li>Account history Beta</li>
                        <li>Account title (not clickable)</li>
                    </ul>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Montag, 10.08.2020</Typography>
                    <ul>
                        <li>Initial Project</li>
                    </ul>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Todo</Typography>
                    <ul>
                        <li>More Feeds</li>
                        <li>Feed Bug communication name</li>
                        <li>Content max height with invisible footer?</li>
                    </ul>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Ideas</Typography>
                    <ul>
                        <li>Account communication summary</li>
                    </ul>
                </Paper>
            </Grid>
        </Grid>
    )
}