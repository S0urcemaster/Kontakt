import React from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

export default function UpdateLog () {
    return (
        <div>
            <Paper style={{padding:"20px", marginBottom:"20px"}}>
                <Typography variant="h1">Montag, 10.08.2020</Typography>
                <ul>
                    <li>Account Search Beta</li>
                    <li>Display Account (missing test data)</li>
                    <li>Account history Beta</li>
                    <li>Account title (not clickable)</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Paper>
            <Paper style={{padding:"20px"}}>
                <Typography variant="h6">Montag, 10.08.2020</Typography>
                <ul>
                    <li>Initial Project</li>
                </ul>
            </Paper>
            <Paper style={{padding:"20px"}}>
                <Typography variant="h6">Montag, 10.08.2020</Typography>
            </Paper>
        </div>
    )
}