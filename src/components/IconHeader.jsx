import Grid from "@material-ui/core/Grid";
import {AccountBalance, AccountBox, LocationOn, Message} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formField: {
        width: "100%",
    },
    summaryContent: {
        // backgroundColor:'rgba(255, 255, 240, 1)',
        // backgroundColor:'rgba(220, 240, 220, 1)',
        padding: '5px 10px 5px 10px',
        width:'100%',
    },
    sectionHeader: {
        backgroundColor:'rgba(250, 248, 245, 1)',
        padding:'5px 0',
        borderTop:'1px solid lightgray',
    }
}))

const MaterialIcon = ({icon, invisible}) => {
    const visibility = invisible ? "hidden" : "visible"
    switch (icon) {
        case 'AccountBalance':
            return <AccountBalance style={{marginLeft:'5px'}} visibility={visibility} />
        case 'AccountBox':
            return <AccountBox style={{marginLeft:'5px'}} visibility={visibility} />
        case 'LocationOn':
            return <LocationOn style={{marginLeft:'5px'}} visibility={visibility} />
        case 'Message':
            return <Message style={{marginLeft:'5px'}} visibility={visibility} />
        default: return null
    }
}

export default function IconHeader(props) {
    const classes = useStyles()
    return (
        <Grid container justify="space-between" alignContent='center' className={classes.sectionHeader}>
            <MaterialIcon icon={props.icon} />
            <Typography variant="h2">{props.title}</Typography>
            <MaterialIcon icon={props.icon} invisible />
        </Grid>
    )
}