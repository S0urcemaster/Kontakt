import Grid from "@material-ui/core/Grid";
import {AccountBalance, AccountBox, Add, LocationOn, Message, MoreVert} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

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

const MaterialIcon = ({icon, margin, props, onClick}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const anchorRef = useRef(null)
    const prevOpen = useRef(menuOpen)

    useEffect( () => {
    }, [])

    useEffect(() => {
        if (prevOpen.current === true && menuOpen === false) {
            anchorRef.current.focus()
        }
        prevOpen.current = menuOpen
    }, [menuOpen]);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
        setMenuOpen(false)
    }

    const toggleMenu = () => {
        setMenuOpen((prevOpen) => !prevOpen)
    }

    function handleClick (callback) {
        toggleMenu()
        callback()
    }

    switch (icon) {
        case 'AccountBalance':
            return <AccountBalance style={margin} />
        case 'AccountBox':
            return <AccountBox style={margin} />
        case 'LocationOn':
            return <LocationOn style={margin} />
        case 'Message':
            return <Message style={margin} />
        case 'Add':
            return <Add style={margin} onClick={props.add} />
        case 'More':
            return (
                <div style={margin}>
                    <MoreVert style={{cursor: 'pointer'}}
                               ref={anchorRef} onClick={toggleMenu}
                    />
                    <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{zIndex:1}} placement="bottom-end">
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                                    {props.menuItems.map((item, key) =>
                                        <MenuItem key={key} onClick={() => handleClick(item.callback)}>{item.title}</MenuItem>
                                    )}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Popper>
                </div>
            )
        default: return null
    }
}

export default function IconHeader(props) {
    const classes = useStyles()
    return (
        <Grid container justify="space-between" alignContent='center' className={classes.sectionHeader}>
            <MaterialIcon icon={props.iconLeft} margin={{marginLeft:'5px'}} />
            <Typography variant="h2">{props.title}</Typography>
            <MaterialIcon icon={props.iconRight} margin={{marginRight:'5px'}} props={props}>
            </MaterialIcon>
        </Grid>
    )
}