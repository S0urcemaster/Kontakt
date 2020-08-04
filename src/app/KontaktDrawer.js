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
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
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
    const theme = useTheme();

    const handleDrawerClose = () => {
        props.closed();
    };
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
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button key="customers">
                    <ListItemIcon><BusinessIcon /></ListItemIcon>
                    <ListItemText primary="Kunden" />
                </ListItem>
            </List>
            <List>
                <ListItem button key="createCommunication">
                    <ListItemIcon><PostAddIcon /></ListItemIcon>
                    <ListItemText primary="Bericht erstellen" />
                </ListItem>
            </List>
            <List>
                <ListItem button key="contacts">
                    <ListItemIcon><PermPhoneMsgIcon /></ListItemIcon>
                    <ListItemText primary="Kontakte" />
                </ListItem>
            </List>
            <List>
                <ListItem button key="users">
                    <ListItemIcon><GroupIcon /></ListItemIcon>
                    <ListItemText primary="Benutzer" />
                </ListItem>
            </List>
            <List>
                <ListItem button key="auxiliaryData">
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Erweiterte Daten" />
                </ListItem>
            </List>
            <List>
                <ListItem button key="changePassword">
                    <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                    <ListItemText primary="Passwort ändern" />
                </ListItem>
            </List>
        </Drawer>
    )
}