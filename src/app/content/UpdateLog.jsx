import React from "react";
import Paper from "@material-ui/core/Paper";
import {Grid, Typography} from "@material-ui/core";

export default function UpdateLog () {
    return (
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Functioning (26.08.2020)</Typography>
                    <ul>
                        <li>Every clickable item/menu should give a result</li>
                        <li>Account search (left input)</li>
                        <li>Display account details</li>
                        <li>Revert function (Account Contacts)</li>
                        <li>Account routing by url</li>
                        <li>"KB" menu</li>
                        <li>User avatar menu</li>
                        <li>Account context menu/Export</li>
                    </ul>
                    <Typography variant="body1">Test data: 101 biggest companies in Baden-Wuerttemberg</Typography>
                    <Typography variant="h6">Time spent: 72,2 h (+10h earlier React learning +Vue experience: ~300 h)</Typography>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Sonntag, 30.08.2020</Typography>
                    <ul>
                        <li>Revert feature (proven to function)</li>
                        <li>Export/download Account to JSON (proven to function)</li>
                    </ul>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Sonntag, 23.08.2020</Typography>
                    <ul>
                        <li>Layout & Styling</li>
                        <li>Started Account forms</li>
                    </ul>
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
                    <Typography variant="h1">Next Submissions (completed)</Typography>
                    <ul>
                        <li>Seeds bugfixes</li>
                        <li>Seeds for missing Account fields</li>
                        <li>More Communication seeds</li>
                        <li>Tip of the day ;)</li>
                        <li>Bugfix CustomerBoard</li>
                        <li>Routing to Account #</li>
                        <li>Overview page (Greeting, with link to UpdateLog)</li>
                        <li>UpdateLog menu link</li>
                        <li>Bugfix empty search</li>
                        <li>New Account feature</li>
                        <li>Empty Account heading at start</li>
                        <li>App snapshots in Overview</li>
                    </ul>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Suspended</Typography>
                    <ul>
                        <li>Account form actions (save, revert)</li>
                        <li></li>
                        <li>Feed Bug communication name</li>
                        <li>Content max height with invisible footer?</li>
                    </ul>
                </Paper>
                <Paper style={{padding:"20px"}}>
                    <Typography variant="h1">Ideas</Typography>
                    <ul>
                        <li>Account communication summary</li>
                        <li>Benennung Kunde oder Firma per Setup für unterschiedliche Anwendung/Zielgruppe</li>
                    </ul>
                </Paper>
            </Grid>
        </Grid>
    )
}