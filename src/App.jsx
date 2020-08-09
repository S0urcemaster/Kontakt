import React, {useEffect} from 'react';
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
import Dialog from "@material-ui/core/Dialog";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Slide from "@material-ui/core/Slide";

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
    const [licenseToken, setLicenseToken] = React.useState(null);
    const [user, setUser] = React.useState(null);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    // useEffect(() => {
    //     if(!user) {
    //         showLogin()
    //     }
    // })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
    )
}

export default App;
