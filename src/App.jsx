import React, {useEffect} from 'react';
import './App.css';
import 'fontsource-roboto';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import KontaktDrawer from "./app/KontaktDrawer";
import KontaktAppBar from "./app/KontaktAppBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Overview from "./app/content/Overview";
import Account from "./app/content/Account";
import {useHistory} from "react-router";
import axios from "axios";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import UpdateLog from "./app/content/UpdateLog";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}));


function App() {
    const classes = useStyles();
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const [alertOpen, setAlertOpen] = React.useState(false);
    const [licenseToken, setLicenseToken] = React.useState(null);
    const [activeAccount, setActiveAccount] = React.useState(null);
    const [accountSearchList, setAccountSearchList] = React.useState([]);
    const [accountHistory, setAccountHistory] = React.useState([]);
    const [user, setUser] = React.useState(null);

    useEffect(() => {
        // axios.get("http://customerboard/json/account/" +1).then(response => {
        //     setActiveAccount(response.data.result)
        //     pushAccountHistory(response.data.result)
        //     history.push("/account")
        // });
    }, [])

    function updateSearchList (input) {
        axios.get(`http://customerboard/json/account/search/`+input)
            .then(res => {
                // console.log(res.data)
                // let array = array.map(myObj, function(value, index) {
                //     return [value];
                // });
                setAccountSearchList(res.data.result)
            })
    }

    function accountSelected (account) {
        axios.get(`http://customerboard/json/account/`+account.id)
            .then(res => {
                console.log(res.data)
                setActiveAccount(res.data.result)
                pushAccountHistory(res.data.result)
                history.push("/account")
            })
    }

    function pushAccountHistory (account) {
        setAccountHistory([account].concat(accountHistory))
        console.log(account)
        console.log(accountHistory)
        // setAccountHistory(accountHistory.slice().push(account))
    }

    function accountClicked (account) {
        setActiveAccount(account)
        history.push("/account")
    }

    function saveAccount () {
        setAlertOpen(true);
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Snackbar open={alertOpen} autoHideDuration={4000} onClose={() => setAlertOpen(false)}>
                <Alert onClose={() => setAlertOpen(false)} severity="success">
                    Account saved!
                </Alert>
            </Snackbar>
            <KontaktAppBar
                open={open}
                opened={() => setOpen(true)}
                activeAccount={activeAccount}
                requireList={updateSearchList}
                accountSearchList={accountSearchList}
                accountSelected={accountSelected}
            />
            <KontaktDrawer
                open={open}
                closed={() => setOpen(false)}
                accountHistory={accountHistory}
                accountClicked={accountClicked}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path="/">
                        {/*<Overview />*/}
                        <UpdateLog />
                    </Route>
                    <Route path="/account">
                        {activeAccount ?
                            <Account
                                account={activeAccount}
                                accountSelected={accountSelected}
                                saveAccount={saveAccount}
                            /> :
                            <Redirect to="/" />
                        }
                    </Route>
                    <Route path="/update-log">
                        <UpdateLog />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App;
