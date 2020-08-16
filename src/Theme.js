import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            h1: {
                fontSize: 28,
                fontWeight: "normal"
            },
            h2: {
                fontSize: 24,
                fontWeight: "normal"
            },
            h3: {
                fontSize: 22,
                fontWeight: "normal"
            },
            h4: {
                fontSize: 20,
                fontWeight: "normal"
            },
            h5: {
                fontSize: 18,
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
    },
});

export default theme