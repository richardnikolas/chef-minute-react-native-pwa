import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#e16111"
        },
        secondary: {
            main: "#f9d162"
        },
        gray: "#9ca2a4",
        lightGray: "#d4d6d7",
        darkGray: "#0f1011",
        lightGreen: "#36c172",
        darkGreen: "#2e8a56",
        errorRed: "#c70000",
        lightRed: "#e13939"
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                filledError: {
                    backgroundColor: "#C70000"
                },
                filledWarning: {
                    backgroundColor: "#F9D162"
                },
                filledInfo: {
                    backgroundColor: "#132540"
                },
                filledSuccess: {
                    backgroundColor: "#2E8A56"
                }
            }
        }
    }
});
