import Accordion from "../../components/Accordion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {Box} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function Communication(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <Accordion
            summary={
                <Box>
                    <Grid container alignItems="baseline" justify="space-between">
                        <Typography variant="subtitle1">{props.communication.contact.firstname} {props.communication.contact.lastname}</Typography>
                        <Typography variant="subtitle1">{props.communication.date}</Typography>
                    </Grid>
                    <Typography>{props.communication.type.name}</Typography>
                    <Typography>{props.communication.memo}</Typography>
                </Box>
            }
            details={
                <Grid container alignContent="stretch" direction="column">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Date picker inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <TextField
                        value="Ewa Elzbieta Barg"
                        label="Kontaktperson"
                    />
                    <TextField
                        value="Telefonisch"
                        label="Kontaktart"
                    />
                    <TextareaAutosize
                        style={{width:100+"%"}}
                        rows={8}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </Grid>
            }
        >

        </Accordion>
    )
}