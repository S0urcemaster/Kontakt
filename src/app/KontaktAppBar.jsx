import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import React, {useRef} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {useHistory} from "react-router";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: theme.appBarBackground,
        borderBottom: theme.appBarBorder,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short,
        }),
    },
    appBarShift: {
        marginLeft: theme.drawerWidth,
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: 'black'
    },
    hide: {
        display: 'none',
    },
    textField: {
        width: "intrinsic",
    },
    search: {
        // background: 'white',
        marginRight: '20px',
        width: '350px'
    },
    account: {
        color: 'black',
        flexGrow: 1,
    },
    paper: {
        // marginRight: theme.spacing(2),
    },
    avatarLink: {

    }
}));

export default function KontaktAppBar (props) {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = React.useState(false)
    const anchorRef = useRef(null)
    const history = useHistory()

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(drawerOpen)
    React.useEffect(() => {
        if (prevOpen.current === true && drawerOpen === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = drawerOpen
    }, [drawerOpen]);

    const handleDrawerOpen = () => {
        props.opened()
    }

    const handleToggle = () => {
        setDrawerOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
        setDrawerOpen(false)
    }

    function accountSearch (event) {
        props.requireList(event.target.value)
    }

    const logout = (event) => {
        handleClose(event)
        history.push("/login")
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setDrawerOpen(false)
        }
    }

    function accountSelected(event, account) {
        props.accountSelected(account)
        history.push("/account")
    }

    function activeAccountAddress() {
        const a = props.activeAccount.addresses[0]
        return a.street + ', ' + a.countryCode + '-' + a.zip + ' ' + a.town
    }

    function gotoUpdateLog(event) {
        handleClose(event)
        history.push('/update-log')
    }

    function goProfile(event) {
        handleClose(event)
        props.goProfile()
    }

    function goPreferences(event) {
        handleClose(event)
        props.goPreferences()
    }

    return (
        <AppBar
            elevation={0}
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: props.open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Autocomplete
                    className={classes.search}
                    id="accountSearch"
                    options={props.accountSearchList}
                    getOptionLabel={(option) => option.name}
                    onChange={accountSelected}
                    onInput={accountSearch}
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                            <TextField
                                {...params}
                                label="Kunde"
                                id="outlined-margin-dense"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </div>
                    )}
                />
                <Autocomplete
                    className={classes.search}
                    id="contactSearch"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                            <TextField
                                {...params}
                                label="Kontakt"
                                id="outlined-margin-dense"
                                className={classes.textField}
                                margin="dense"
                                variant="outlined"
                            />
                        </div>
                    )}
                />
                <Box style={{flexGrow:1}}>
                    <Typography className={classes.account} variant="subtitle2">
                        {props.activeAccount ? props.activeAccount.name : "Mercedes Benz AG Stuttgart, Dieter Zetsche"}
                    </Typography>
                    <Typography className={classes.account} variant="subtitle2">
                        {props.activeAccount ? activeAccountAddress() : "0711 25935414, dieter-zetsche@daimler-benz-ag.com"}
                    </Typography>
                </Box>
                <div>
                    <Avatar src="/broken-image.jpg"
                            ref={anchorRef}
                            onClick={() => handleToggle()}
                            style={{cursor:"pointer"}}
                    />
                    <Popper open={drawerOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={drawerOpen} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={goProfile}>Profil</MenuItem>
                                            <MenuItem onClick={goPreferences}>Einstellungen</MenuItem>
                                            <MenuItem onClick={handleClose}>Benutzerverwaltung</MenuItem>
                                            <MenuItem onClick={handleClose}>Lizenz</MenuItem>
                                            <MenuItem onClick={logout}>Logout</MenuItem>
                                            <MenuItem onClick={gotoUpdateLog}>Update Log</MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Toolbar>
        </AppBar>
    )
}

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];