import React from "react";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

export default function Preferences () {
    return (
        <div>
            <Paper style={{padding:"20px", marginBottom:"20px"}}>
                <Typography variant="h1">Globale Einstellungen</Typography>
                <ul>
                    <li>Name</li>
                    <li>Bild</li>
                    <li>Dark Theme</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </Paper>
        </div>
    )
}