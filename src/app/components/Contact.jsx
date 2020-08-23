import Accordion from "../../components/Accordion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";

export default function Contact(props) {
    const [contact, setContact] = useState({})
    const [saveEnabled, setSaveEnabled] = React.useState(false);
    const [revertEnabled, setRevertEnabled] = React.useState(false);

    useEffect(() => {
        console.log('component did mount')
        console.log(props.firstname)
        setContact({
            firstname: props.firstname,
            lastname: props.lastname,
            position: props.position,
            department: props.department,
        })
        console.log('contact set')
    }, [])

    React.useEffect(() => {
        if(Object.keys(contact).length === 0) return
        console.log('changed')
        setSaveEnabled(true)
        setRevertEnabled(true)
    },[contact])

    function firstnameChanged(event) {
        setContact(({
            ...contact,
            firstname: event.target.value,
        }))
    }

    return (
        <Accordion
            save={props.save}
            saveEnabled={saveEnabled}
            revert={props.revert}
            revertEnabled={revertEnabled}
            summary={
                <Box>
                    <Typography variant="subtitle1">{props.contact.firstname} {props.contact.lastname}</Typography>
                    <Typography>{props.contact.position} {props.contact.department}</Typography>
                    {/*{props.contact.connections.map((connection) =>*/}
                    {/*    <Typography>{connection.text}</Typography>*/}
                    {/*)}*/}
                    {/*<Typography>{props.contact.remarks}</Typography>*/}
                </Box>
            }
            details={
                <Grid container alignContent="stretch" direction="column">
                    <TextField
                        value="Ola"
                        label="Vorname"
                        onChange={firstnameChanged}
                    />
                    <TextField
                        value="Källlenius"
                        label="Nachname"
                    />
                    <TextField
                        value="Vorstand"
                        label="Abteilung"
                    />
                    <TextField
                        value="Vorsitzender"
                        label="Position"
                    />
                    <TextField
                        value="0711 1111111"
                        label="Telefon"
                    />
                    <TextField
                        value=""
                        label="Bemerkung"
                    />
                </Grid>
            }
        >

        </Accordion>
    )
}