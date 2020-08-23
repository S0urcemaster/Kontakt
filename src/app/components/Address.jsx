import Accordion from "../../components/Accordion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {Box, Container} from "@material-ui/core";

export default function Address(props) {
    return (
        <Accordion
            summary={
                <Box>
                    <Typography variant="subtitle1">{props.address.type.name}</Typography>
                    <Typography>{props.address.name1}</Typography>
                    <Typography>{props.address.street}</Typography>
                    <Typography>{props.address.countryCode}-{props.address.zip} {props.address.town}</Typography>
                </Box>
            }
            details={
                <Grid container alignContent="stretch" direction="column">
                    <TextField
                        value="Mercedes Daimler Benz ABC"
                        label="Feld 1"
                    />
                    <TextField
                        value=""
                        label="Feld 2"
                    />
                    <TextField
                        value=""
                        label="Feld 3"
                    />
                    <TextField
                        value="Mercedesstraße 123"
                        label="Straße"
                    />
                    <TextField
                        value="D"
                        label="LKZ"
                    />
                    <TextField
                        value="PLZ"
                        label="77777"
                    />
                    <TextField
                        value=" Untertürckheim-Cannstatt"
                        label="Stadt"
                    />
                </Grid>
            }
        >

        </Accordion>
    )
}