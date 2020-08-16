import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from "@material-ui/core/Checkbox";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import {Box} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import format from 'date-fns/format'
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {AccountCircleOutlined, FolderOpen, Timer} from "@material-ui/icons";

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
    React.useEffect(() => {
        // if(props.account === null) {
        //     history.push("/overview")
        // }
    })
    function accountManagerFullName () {
        return props.account.accountManager.firstname + ' ' + props.account.accountManager.lastname
    }
    function nextContactDate () {
        if (props.account.nextContact) {
            return moment(props.account.nextContact).format("dddd, DD.MM.YYYY")
        }
        else {
            return "Not set"
        }
    }
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Accordion className={classes.marginB}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                        >
                            <Grid container direction="column">
                                <Grid container alignItems="baseline" justify="space-between">
                                    <Grid item>
                                        <Typography variant="subtitle1">{props.account.name}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1"><i>[{props.account.mnemonic}]</i></Typography>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="baseline">
                                    <Grid item xs={1}>
                                        <AccountCircleOutlined fontSize="inherit" />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography variant="body1">{accountManagerFullName()}</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <FolderOpen fontSize="inherit" />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography variant="body1">{props.account.sector.name}</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Timer fontSize="inherit" />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography variant="body1">{nextContactDate()}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
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
                                <Grid container justify="space-between" alignItems="baseline">
                                    <Grid item>
                                        <Typography>Verbotskunde</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Checkbox
                                            className={classes.formField}
                                            value={props.account.verbotskunde}
                                        />
                                    </Grid>
                                </Grid>
                                {/*<FormControlLabel label="Verbotskunde" control={*/}
                                {/*} />*/}
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
                                <Grid container justify="flex-end">
                                    <Button variant="contained" onClick={props.saveAccount}>Save</Button>
                                </Grid>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                    {props.account.addresses.map((address) =>
                    <Accordion className={classes.marginB} key={address.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                        >
                            <Box>
                                <Typography variant="subtitle1">{address.type.name}</Typography>
                                <Typography>{address.name1}</Typography>
                                <Typography>{address.street}</Typography>
                                <Typography>{address.countryCode}-{address.zip} {address.town}</Typography>
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
                    )}
                </Grid>
                <Grid item xs={4}>
                    {props.account.contacts.map((contact) =>
                    <Accordion className={classes.marginB} key={contact.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"
                        >
                            <Box>
                                <Typography variant="subtitle1">{contact.firstname} {contact.lastname}</Typography>
                                <Typography>{contact.position} {contact.department}</Typography>
                                {/*{contact.connections.map((connection) =>*/}
                                {/*    <Typography>{connection.text}</Typography>*/}
                                {/*)}*/}
                                {/*<Typography>{contact.remarks}</Typography>*/}
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
                    )}
                </Grid>
                <Grid item xs={4}>
                    {props.account.communications.map((communication) =>
                    <Accordion className={classes.marginB} key={communication.id}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                        >
                            <Box>
                                <Typography variant="subtitle1">{communication.date}</Typography>
                                <Typography>{communication.contact.firstname} {communication.contact.lastname}</Typography>
                                <Typography>{communication.type.name}</Typography>
                                <Typography>{communication.memo}</Typography>
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
                    )}
                </Grid>
            </Grid>
        </div>
    )
}