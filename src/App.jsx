import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./shared/theme";
import Router from "./Router";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
}

export default App;
