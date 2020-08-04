import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: 'white',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
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
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    search: {
        background: 'white',
        marginRight: '10px'
    },
}));

export default function KontaktAppBar (props) {
    const classes = useStyles();

    const handleDrawerOpen = () => {
        props.opened();
    };

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
                    id="custom-input-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
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
                    id="custom-input-demo"
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