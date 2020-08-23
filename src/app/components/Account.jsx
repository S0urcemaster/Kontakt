import Accordion from "../../components/Accordion";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {AccountCircle, Apartment, Timer} from "@material-ui/icons";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";

export default function Account(props) {
    const [account, setAccount] = React.useState({});
    const [saveEnabled, setSaveEnabled] = React.useState(false);
    const [revertEnabled, setRevertEnabled] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    React.useEffect(() => {
        setAccount({
            mnemonic: props.mnemonic,
            name: props.name,
        })
    },[])

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

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

    function revert() {
        // props.revertAccount()
    }

    function save() {
        props.save(account)
    }

    function mnemonicChanged(event) {
        console.log(event.target.value)
        setAccount({...account, mnemonic: event.target.value})
        // props.save(account)
    }

    React.useEffect(() => {
        setSaveEnabled(true)
        setRevertEnabled(true)
    }, [account]);

    return (
        <Accordion
            save={() => props.save(account)}
            saveEnabled={saveEnabled}
            revert={revert}
            revertEnabled={revertEnabled}
            summary={
                <Grid container alignItems="baseline" justify="space-between">
                    <Grid item>
                        <Typography variant="subtitle1">{props.account.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1"><i>[{props.account.mnemonic}]</i></Typography>
                    </Grid>
                    <Grid container alignItems="baseline">
                        <Tooltip title="Account Manager">
                            <Grid item xs={1}>
                                <AccountCircle fontSize="inherit"/>
                            </Grid>
                        </Tooltip>
                        <Grid item xs={11}>
                            <Typography variant="body1">{accountManagerFullName()}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="Branch">
                                <Apartment fontSize="inherit" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="body1">{props.account.sector.name}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="Next Contact">
                                <Timer fontSize="inherit" />
                            </Tooltip>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="body1">{nextContactDate()}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
            details={
                <Grid container alignContent="stretch" direction="column">
                    <TextField
                        value={props.account.mnemonic}
                        label="Kürzel"
                        onChange={mnemonicChanged}
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
                </Grid>
            }
        >

        </Accordion>
    )
}