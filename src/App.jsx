import React, {useEffect, useState} from 'react';
import './App.css';
import 'fontsource-roboto';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import KontaktDrawer from "./app/KontaktDrawer";
import KontaktAppBar from "./app/KontaktAppBar";
import {Route, Switch, useParams} from "react-router-dom";
import Account from "./app/content/Account";
import {useHistory} from "react-router";
import axios from "axios";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import UpdateLog from "./app/content/UpdateLog";
import Profile from "./app/content/Profile";
import Preferences from "./app/content/Preferences";
import Overview from "./app/content/Overview";
import NewAccount from "./app/content/NewAccount";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: '100%',
        height: '100%'
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
        overflowY: "scroll",
        overflowX: "hidden",
        maxHeight: "97.9vh",
        // height: "98vh",
        // display: "flex"
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
    const [open, setOpen] = useState(true);
    const [alertOpen, setAlertOpen] = useState(false);
    const [account, setAccount] = useState(null);
    const [accountSearchList, setAccountSearchList] = useState([]);
    const [accountHistory, setAccountHistory] = useState([]);
    const [user, setUser] = useState({
        id:1,
        firstname:'Joe',
        lastname:'Kher',
    });

    const mainMenu = [
        {title:"Overview", path:"/"},
        {title:"New Account", path:'/account/new'},
    ]

    useEffect(() => {
        // axios.get("https://customerboard/json/account/" +1).then(response => {
        //     setActiveAccount(response.data.result)
        //     pushAccountHistory(response.data.result)
        //     history.push("/account")
        // });
    }, [])

    useEffect(() => {
        console.log('account: ', account)
    }, [account]);

    function showPreferences () {
        history.push('/preferences');
    }

    function updateSearchList (input) {
        axios.get(`https://digi-craft.de/customerboard/json/account/search/`+input)
            .then(res => {
                // console.log(res.data)
                // let array = array.map(myObj, function(value, index) {
                //     return [value];
                // });
                setAccountSearchList(res.data.result)
            })
        // axios.get(`https://customerboard/json/account/search/`+input)
        //     .then(res => {
        //     })
    }

    function accountSelected (account) {
        // history.push("/account/" +account.id)
        axios.get(`https://digi-craft.de/customerboard/json/account/`+account.id)
            .then(res => {
                console.log('account selected: ', res.data)
                // setAccount(res.data.result)
                // pushAccountHistory(res.data.result)
                history.push("/account/" +account.id)
            })
        // axios.get(`https://customerboard/json/account/`+account.id)
        //     .then(res => {
        //     })
    }

    function accountLoaded(account) {
        console.log('loaded parent: ', account)
        setAccount(account)
        pushAccountHistory(account)
    }

    function pushAccountHistory (account) {
        console.log('history pushed: ', account)
        setAccountHistory([account].concat(accountHistory))
    }

    function accountClicked (account) {
        // setAccount(account)
        history.push("/account/" +account.id)
    }

    function mainMenuSelected (menu) {
        console.log('menu: ', menu)
        history.push(menu.path)
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
                activeAccount={account}
                requireList={updateSearchList}
                accountSearchList={accountSearchList}
                accountSelected={accountSelected}
                goProfile={() => {history.push('/profile')}}
                goPreferences={() => showPreferences()}
                history={accountHistory}
                mainMenu={mainMenu}
                mainMenuSelected={mainMenuSelected}
            />
            {/*<KontaktDrawer*/}
            {/*    open={open}*/}
            {/*    closed={() => setOpen(false)}*/}
            {/*    accountHistory={accountHistory}*/}
            {/*    accountClicked={accountClicked}*/}
            {/*/>*/}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path="/">
                        <Overview />
                        {/*<UpdateLog />*/}
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/preferences">
                        <Preferences />
                    </Route>
                    <Route exact path="/account/new" render={(props) => <NewAccount {...props} loaded={accountLoaded} user={user}/>}>
                    </Route>
                    <Route exact path="/account/:id" render={(props) => <Account {...props} loaded={accountLoaded} user={user}/>}>
                    </Route>
                    <Route exact path="/update-log">
                        <UpdateLog />
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App;
