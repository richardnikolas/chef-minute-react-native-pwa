import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./shared/theme";
import Router from "./Router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./styles/global.css";
import "./styles/fonts.css";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}
