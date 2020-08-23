import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import {Box, Container, List, ListItem} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import moment from "moment";
import {AccountCircleOutlined, FolderOpen, Timer} from "@material-ui/icons";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

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

const Accordion = withStyles({
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
            <Grid container spacing={0}>
                <Grid item xs={4} style={{borderRight:'1px solid lightgray'}}>
                    <Grid container justify="space-around" className={classes.sectionHeader}>
                        <Typography variant="h2">Kunde</Typography>
                    </Grid>
                    <Accordion square variant="outlined" style={{
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
                            <Grid container alignContent="stretch" direction="column">
                                <TextField
                                    value="merc"
                                    label="Kürzel"
                                />
                                <TextField
                                    value="Mercedes Benz AG und Co. KG Dingsbums"
                                    label="Name"
                                />
                                <TextField
                                    value="Sebastian Teister"
                                    label="Kundenbetreuer"
                                />
                                <TextField
                                    value="Kundenlevel"
                                    label="Level"
                                />
                                <Grid container justify="space-between" alignItems="baseline">
                                    <Grid item>
                                        <Typography>Verbotskunde</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Checkbox
                                            value={props.account.verbotskunde}
                                        />
                                    </Grid>
                                </Grid>
                                {/*<FormControlLabel label="Verbotskunde" control={*/}
                                {/*} />*/}
                                <TextField
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
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                    <Grid container justify="space-around" className={classes.sectionHeader}>
                        <Typography variant="h2">Kontakte</Typography>
                    </Grid>
                    {props.account.contacts.map((contact) =>
                        <Accordion key={contact.id} variant="outlined">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                                id="additional-actions1-header"
                            >
                                <Box className={classes.summaryContent}>
                                    <Typography variant="subtitle1">{contact.firstname} {contact.lastname}</Typography>
                                    <Typography>{contact.position} {contact.department}</Typography>
                                    {/*{contact.connections.map((connection) =>*/}
                                    {/*    <Typography>{connection.text}</Typography>*/}
                                    {/*)}*/}
                                    {/*<Typography>{contact.remarks}</Typography>*/}
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
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
                            </AccordionDetails>
                        </Accordion>
                    )}
                    <Grid container justify="space-around" className={classes.sectionHeader}>
                        <Typography variant="h2">Adressen</Typography>
                    </Grid>
                    {props.account.addresses.map((address) =>
                        <Accordion key={address.id} variant="outlined">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-label="Expand"
                                aria-controls="additional-actions1-content"
                            >
                                <Box className={classes.summaryContent}>
                                    <Typography variant="subtitle1">{address.type.name}</Typography>
                                    <Typography>{address.name1}</Typography>
                                    <Typography>{address.street}</Typography>
                                    <Typography>{address.countryCode}-{address.zip} {address.town}</Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
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
                            </AccordionDetails>
                        </Accordion>
                    )}
                </Grid>
                <Grid item xs={8}>
                    <Grid container justify="space-around" className={classes.sectionHeader}>
                        <Typography variant="h2">Kommunikation</Typography>
                    </Grid>
                    {props.account.communications.map((communication) =>
                    <Accordion key={communication.id} variant="outlined">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                        >
                            <Box className={classes.summaryContent}>
                                <Grid container alignItems="baseline" justify="space-between">
                                    <Typography variant="subtitle1">{communication.contact.firstname} {communication.contact.lastname}</Typography>
                                    <Typography variant="subtitle1">{communication.date}</Typography>
                                </Grid>
                                <Typography>{communication.type.name}</Typography>
                                <Typography>{communication.memo}</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                    )}
                </Grid>
            </Grid>
        </div>
    )
}