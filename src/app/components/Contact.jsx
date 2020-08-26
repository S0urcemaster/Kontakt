import Accordion from "../../components/Accordion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useReducer, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";
import IconHeader from "../../components/IconHeader";

export default function Contact(props) {
    const [saveEnabled, setSaveEnabled] = React.useState(false);
    const [revertEnabled, setRevertEnabled] = React.useState(false);

    const initialContact = {
        firstname: props.contact.firstname,
        lastname: props.contact.lastname,
        position: props.contact.position,
        department: props.contact.department,
        connections: props.contact.connections,
        remarks: props.contact.remarks,
    }

    const [contact, dispatch] = useReducer((state, action) => {
        setSaveEnabled(true)
        setRevertEnabled(true)
        switch (action.type) {
            case 'firstname':
                return {...state, firstname: action.value};
            case 'lastname':
                return {...state, lastname: action.value};
            case 'position':
                return {...state, position: action.value};
            case 'department':
                return {...state, department: action.value};
            case 'reset':
                setSaveEnabled(false)
                setRevertEnabled(false)
                return {...initialContact};
            default:
                throw new Error();
        }
    }, initialContact)

    return (
        <Accordion
            save={props.save}
            saveEnabled={saveEnabled}
            revert={() => dispatch({type: 'reset'})}
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
                        value={contact.firstname}
                        label="Vorname"
                        onChange={(event) => dispatch({type:'firstname', value:event.target.value})}
                    />
                    <TextField
                        value={contact.lastname}
                        label="Nachname"
                        onChange={(event) => dispatch({type:'lastname', value:event.target.value})}
                    />
                    <TextField
                        value={contact.department}
                        label="Abteilung"
                        onChange={(event) => dispatch({type:'department', value:event.target.value})}
                    />
                    <TextField
                        value={contact.position}
                        label="Position"
                        onChange={(event) => dispatch({type:'position', value:event.target.value})}
                    />
                    {contact.connections.map((connection) =>
                        <TextField
                            value={connection.text}
                            label={connection.type.name}
                        />
                    )}
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