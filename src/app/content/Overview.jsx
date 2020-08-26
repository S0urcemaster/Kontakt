import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import {Close} from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import account20200826 from '../../snapshot-images/Account 2020-08-26.png'
import account20200826a from '../../snapshot-images/Account 2020-08-26.png'

const useStyles = makeStyles((theme) => ({
    h1: {
        paddingBottom: '20px'
    },
    gridList: {
        width: "80%",
        height: "100%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));


export default function Overview (props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleClickOpen = (data) => {
        console.log('open: ', data)
        setSelectedImage(data)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const tileData = [
        {
            title:'Account',
            date:'26.08.2020',
            img:account20200826
        },
    ]

    const [selectedImage, setSelectedImage] = useState(tileData[0])

    return (
        <div>
            <Paper style={{padding:"20px"}}>
                <Typography variant="h1" className={classes.h1}>kontakt base - Kundenbesuchsdatenbank</Typography>
                <Typography variant="body1">"kontakt base" is a customer relationship management software training project
                that transforms the former Vue frontend with handmade javascript components into React with Material UI.
                </Typography>
            </Paper>
            <Paper style={{padding:"20px", backgroundColor:'#aaa'}}>
                <Typography variant="h1" className={classes.h1}>Development Snapshots</Typography>
                <GridList className={classes.gridList} cellHeight="100%" cols={1}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} style={{marginBottom:'50px'}}>
                            <img src={tile.img} alt={tile.title} style={{maxWidth:"100%"}} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>{tile.date}</span>}
                                style={{cursor:'pointer'}}
                                onClick={() => handleClickOpen(tile)}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </Paper>
            <Dialog fullScreen open={open} onClose={handleClose}>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <Close />
                </IconButton>
                <img src={selectedImage.img}/>
            </Dialog>
        </div>
    )
}