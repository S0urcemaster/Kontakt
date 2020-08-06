import React from 'react';
import './App.css';
import 'fontsource-roboto';
import Typography from "@material-ui/core/Typography";
import {fade, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import KontaktDrawer from "./app/KontaktDrawer";
import KontaktAppBar from "./app/KontaktAppBar";
import {Route, Switch} from "react-router-dom";
import Overview from "./app/content/Overview";
import Account from "./app/content/Account";
// import Router from "react-router/modules/Router";

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
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <KontaktAppBar
                open={open}
                opened={() => setOpen(true)}
            />
            <KontaktDrawer
                open={open}
                closed={() => setOpen(false)}
            />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path="/">
                        <Overview />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
