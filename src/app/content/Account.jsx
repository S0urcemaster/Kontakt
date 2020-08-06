import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
    padding: {
        padding: "20px"
    },
    formField: {
        width: "100%",
        paddingBottom: "10px"
    },
    marginB: {
        marginBottom: "20px"
    }
}))

export default function Account (props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>[merc]</Typography>
                                <Typography>Mercedes Benz AG und Co. KG Dingsbums</Typography>
                                <Typography>Kundenbetreuer: Sebastian Teister</Typography>
                                <Typography>Branche: Automobil</Typography>
                                <Typography>Kontakttermin: 02.01.2021</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
                                <TextField
                                    className={classes.formField}
                                    value="merc"
                                    label="Kürzel"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Mercedes Benz AG und Co. KG Dingsbums"
                                    label="Name"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Sebastian Teister"
                                    label="Kundenbetreuer"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Kundenlevel"
                                    label="Level"
                                />
                                <Checkbox
                                    className={classes.formField}
                                    label="Verbotskunde"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Automobil"
                                    label="Branche"
                                />
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>[Hauptadresse]</Typography>
                                <Typography>Mercedes Daimler Benz ABC</Typography>
                                <Typography>Mercedesstraße 123</Typography>
                                <Typography>D 77777 Stuttgart Untertürckheim-Cannstatt</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
                                <TextField
                                    className={classes.formField}
                                    value="Mercedes Daimler Benz ABC"
                                    label="Feld 1"
                                />
                                <TextField
                                    className={classes.formField}
                                    value=""
                                    label="Feld 2"
                                />
                                <TextField
                                    className={classes.formField}
                                    value=""
                                    label="Feld 3"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Mercedesstraße 123"
                                    label="Straße"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="D"
                                    label="LKZ"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="PLZ"
                                    label="77777"
                                />
                                <TextField
                                    className={classes.formField}
                                    value=" Untertürckheim-Cannstatt"
                                    label="Stadt"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>[Zweigstelle]</Typography>
                                <Typography>Mercedes Daimler Benz DEF</Typography>
                                <Typography>Mercedesstraße 456</Typography>
                                <Typography>D 72555 Metzingen</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
                                <TextField
                                    className={classes.formField}
                                    value="Mercedes Daimler Benz ABC"
                                    label="Feld 1"
                                />
                                <TextField
                                    className={classes.formField}
                                    value=""
                                    label="Feld 2"
                                />
                                <TextField
                                    className={classes.formField}
                                    value=""
                                    label="Feld 3"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Mercedesstraße 123"
                                    label="Straße"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="D"
                                    label="LKZ"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="PLZ"
                                    label="77777"
                                />
                                <TextField
                                    className={classes.formField}
                                    value=" Untertürckheim-Cannstatt"
                                    label="Stadt"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={4}>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>Ola Köllenius (m)</Typography>
                                <Typography>Vorsitzender in Vorstand</Typography>
                                <Typography>0711 111111111</Typography>
                                <Typography>Kann nix</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
                                <TextField
                                    className={classes.formField}
                                    value="Ola"
                                    label="Vorname"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Källlenius"
                                    label="Nachname"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Vorstand"
                                    label="Abteilung"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Vorsitzender"
                                    label="Position"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="0711 1111111"
                                    label="Telefon"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Kann nix"
                                    label="Bemerkung"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>Dieter Zwetsche (m)</Typography>
                                <Typography>Vorsitzender a.D in Ruhestand</Typography>
                                <Typography>0711 111111111</Typography>
                                <Typography>Bemerkung</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
                                <TextField
                                    className={classes.formField}
                                    value="Dieter"
                                    label="Vorname"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Zetzschge"
                                    label="Nachname"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Vorstand a.D."
                                    label="Abteilung"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Ruhestand"
                                    label="Position"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="0711 1111111"
                                    label="Telefon"
                                />
                                <TextField
                                    className={classes.formField}
                                    value="Bemerkung"
                                    label="Bemerkung"
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={4}>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>05.05.2020</Typography>
                                <Typography>Ewa Elzbieta Barg</Typography>
                                <Typography>Telefonisch</Typography>
                                <Typography>Nettes Gespräch</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
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
                                    className={classes.formField}
                                    value="Ewa Elzbieta Barg"
                                    label="Kontaktperson"
                                />
                                <TextField
                                    className={classes.formField}
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>05.05.2020</Typography>
                                <Typography>Ewa Elzbieta Barg</Typography>
                                <Typography>Telefonisch</Typography>
                                <Typography>Talk Talk Talk</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
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
                                    className={classes.formField}
                                    value="Ewa Elzbieta Barg"
                                    label="Kontaktperson"
                                />
                                <TextField
                                    className={classes.formField}
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>05.05.2020</Typography>
                                <Typography>Ewa Elzbieta Barg</Typography>
                                <Typography>Telefonisch</Typography>
                                <Typography>Gut drauf</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
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
                                    className={classes.formField}
                                    value="Ewa Elzbieta Barg"
                                    label="Kontaktperson"
                                />
                                <TextField
                                    className={classes.formField}
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>05.05.2020</Typography>
                                <Typography>Ewa Elzbieta Barg</Typography>
                                <Typography>Telefonisch</Typography>
                                <Typography>Kein Bock</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
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
                                    className={classes.formField}
                                    value="Ewa Elzbieta Barg"
                                    label="Kontaktperson"
                                />
                                <TextField
                                    className={classes.formField}
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography>05.05.2020</Typography>
                                <Typography>Ewa Elzbieta Barg</Typography>
                                <Typography>Telefonisch</Typography>
                                <Typography>Schlecht gelaunt</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box className={classes.padding}>
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
                                    className={classes.formField}
                                    value="Ewa Elzbieta Barg"
                                    label="Kontaktperson"
                                />
                                <TextField
                                    className={classes.formField}
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
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
    )
}