import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import BusinessIcon from "@material-ui/icons/Business";
import ListItemText from "@material-ui/core/ListItemText";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import GroupIcon from "@material-ui/icons/Group";
import SettingsIcon from "@material-ui/icons/Settings";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import {Typography} from "@material-ui/core";
import {Link, Route, Switch} from "react-router-dom";
import {useHistory} from "react-router";
import Overview from "./content/Overview";
import Account from "./content/Account";
//import drawerWidth from "../App";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing(0, 1),
        // necessary for content to be below content bar
        ...theme.mixins.toolbar,
    },
}));
export default function KontaktDrawer (props) {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();

    const handleDrawerClose = () => {
        props.closed();
    };

    function overviewClicked () {
        history.push("/")
    }

    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: props.open,
                [classes.drawerClose]: !props.open,
            })}
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
                <Typography variant="h5">
                    kontakt base
                </Typography>
            </div>
            <List>
                <ListItem button key="overview" onClick={overviewClicked}>
                    <ListItemIcon><PermPhoneMsgIcon /></ListItemIcon>
                    <ListItemText primary="Übersicht" />
                </ListItem>
                <ListItem button key="newAccount">
                    <ListItemIcon><PostAddIcon /></ListItemIcon>
                    <ListItemText primary="Neuer Kunde" />
                </ListItem>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/account">
                        <ListItem button key="newAccountAddress">
                            <ListItemIcon><PostAddIcon /></ListItemIcon>
                            <ListItemText primary="Neue Kundenadresse" />
                        </ListItem>
                        <ListItem button key="newAccountContact">
                            <ListItemIcon><PostAddIcon /></ListItemIcon>
                            <ListItemText primary="Neuer Kundenkontakt" />
                        </ListItem>
                        <ListItem button key="newAccountCommunication">
                            <ListItemIcon><PostAddIcon /></ListItemIcon>
                            <ListItemText primary="Neuer Kontaktbericht" />
                        </ListItem>
                    </Route>
                </Switch>
            </List>
            {/*<List>*/}
            {/*    <ListItem button key="users">*/}
            {/*        <ListItemIcon><GroupIcon /></ListItemIcon>*/}
            {/*        <ListItemText primary="Benutzer" />*/}
            {/*    </ListItem>*/}
            {/*</List>*/}
            {/*<List>*/}
            {/*    <ListItem button key="auxiliaryData">*/}
            {/*        <ListItemIcon><SettingsIcon /></ListItemIcon>*/}
            {/*        <ListItemText primary="Erweiterte Daten" />*/}
            {/*    </ListItem>*/}
            {/*</List>*/}
            {/*<List>*/}
            {/*    <ListItem button key="changePassword">*/}
            {/*        <ListItemIcon><VpnKeyIcon /></ListItemIcon>*/}
            {/*        <ListItemText primary="Passwort ändern" />*/}
            {/*    </ListItem>*/}
            {/*</List>*/}
            <Divider />
            <List>
                <ListItem button key="customers">
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Dieter Zetsche" />
                </ListItem>
                <ListItem button key="customers">
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Sebastian Teister" />
                </ListItem>
                <ListItem button key="customers">
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="" />
                </ListItem>
            </List>
        </Drawer>
    )
}