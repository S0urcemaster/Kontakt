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

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default function Overview (props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <Card style={{padding:20+"px"}}>
                    <Typography>Offene Kontakte</Typography>
                </Card>
                <Accordion className={classes.marginB}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <Box>
                            <Typography>05.05.2020</Typography>
                            <Typography>Altstadt Botique Leer</Typography>
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
                                label="Kontaktperson"
                            />
                            <TextField
                                className={classes.formField}
                                label="Kontaktart"
                            />
                            <TextareaAutosize
                                style={{width:100+"%"}}
                                rows={8}
                                aria-label="maximum height"
                                placeholder="Text"
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
                            <Typography>Altstadt Botique Leer</Typography>
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
                                label="Kontaktperson"
                            />
                            <TextField
                                className={classes.formField}
                                label="Kontaktart"
                            />
                            <TextareaAutosize
                                style={{width:100+"%"}}
                                rows={8}
                                aria-label="maximum height"
                                placeholder="Text"
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
                            <Typography>Altstadt Botique Leer</Typography>
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
                                label="Kontaktperson"
                            />
                            <TextField
                                className={classes.formField}
                                label="Kontaktart"
                            />
                            <TextareaAutosize
                                style={{width:100+"%"}}
                                rows={8}
                                aria-label="maximum height"
                                placeholder="Text"
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
                            <Typography>Altstadt Botique Leer</Typography>
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
                                label="Kontaktperson"
                            />
                            <TextField
                                className={classes.formField}
                                label="Kontaktart"
                            />
                            <TextareaAutosize
                                style={{width:100+"%"}}
                                rows={8}
                                aria-label="maximum height"
                                placeholder="Text"
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={6}>
                <Card style={{padding:20+"px"}}>
                    <Typography>Erledigte Kontakte</Typography>
                </Card>
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
            </Grid>
        </Grid>
    )
}