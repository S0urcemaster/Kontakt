import Accordion from "../../components/Accordion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";

export default function Contact(props) {
    return (
        <Accordion
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