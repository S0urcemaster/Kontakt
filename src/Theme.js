import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// import black from '@material-ui/core/colors/'

const theme = createMuiTheme({
    palette: {
        AppBar: {
            primary: {
                light: '#fff',
                dark: '#000'
            },
            secondary: {
                light: '#000',
                dark: '#fff'
            }
        }
    },
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: 24,
                fontWeight: "normal"
            },
            h2: {
                fontSize: 22,
                fontWeight: "normal"
            },
            h3: {
                fontSize: 20,
                fontWeight: "normal"
            },
            h4: {
                fontSize: 18,
                fontWeight: "normal"
            },
            h5: {
                fontSize: 17,
                fontWeight: "normal",
                fontStyle: "italic"
            },
            h6: {
                fontSize: 16,
                fontWeight: "bold"
            },
            subtitle1: {
                fontSize: 15,
                fontWeight: "bold"
            },
            subtitle2: {
                fontSize: 14,
                fontWeight: "bold"
            },
            body1: {
                fontSize: 15,
                fontWeight: "normal"
            },
            body2: {
                fontSize: 14,
                fontWeight: "normal"
            },
        },
        MuiAppBar: {
            // background: 'white',
            // borderBottom: "1px solid lightGray",
        }
    },
    drawerWidth: 240,
    appBarBackground: 'rgba(250, 250, 235, 1)',
    appBarBorder: "1px solid lightGray",
    AppBar: {
        background: '#fff',
        color: '#000',
    }
});

export default theme