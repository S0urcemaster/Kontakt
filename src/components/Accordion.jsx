import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    summaryContent: {
        // backgroundColor:'rgba(255, 255, 240, 1)',
        // backgroundColor:'rgba(220, 240, 220, 1)',
        padding: '5px 10px 5px 10px',
        width:'100%',
    },
}))

const KBAccordion = withStyles({
    root: {
        // border: '1px solid rgba(0, 0, 0, .125)',
        border: 0,
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor:'rgba(245, 250, 235, 1)',
        // backgroundColor: 'rgba(255, 255, 255, 1)',
        // borderBottom: '1px solid rgba(0, 0, 0, .125)',
        borderBottom: 0,
        borderTop: '1px solid lightgray',
        // marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
        padding:0
    },
    content: {
        '&$expanded': {
            margin: '0px 0',
        },
        padding:0,
        margin:0,
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        // backgroundColor: 'rgba(220, 240, 220, 1)',
    },
}))(MuiAccordionDetails);


export default function Accordion (props) {

    const classes = useStyles();
    return (

        <KBAccordion square variant="outlined" style={{
            content: {
                '&$expanded': {
                    margin: '0 0',
                },
                expanded: {},
            },
        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
            >
                <Grid container direction="column" className={classes.summaryContent}>
                    {props.summary}
                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container alignContent="stretch" direction="column">
                    {props.details}
                    <Grid container justify="flex-end" style={{marginTop:'10px'}}>
                        <Button variant="outlined" onClick={props.revert} style={{marginRight:'10px'}} disabled={!props.revertEnabled}>Revert</Button>
                        <Button variant="outlined" onClick={props.save} disabled={!props.saveEnabled}>Save</Button>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </KBAccordion>
    )
}