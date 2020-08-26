import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from "@material-ui/core/Card";
import {Box} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    Typography: {
        paddingBottom: '10px'
    }
}));

export default function Overview (props) {
    const classes = useStyles();

    return (
        <Paper style={{padding:"20px"}}>
            <Typography variant="h1">kontakt base - Kundenbesuchsdatenbank</Typography>
            <Typography variant="body1">"kontakt base" is a customer relationship management software training project
            that transforms the former Vue frontend with handmade javascript components into React with Material UI.
            </Typography>
            <Typography variant="body1">Hours spent: 58,2</Typography>
        </Paper>
    )
}