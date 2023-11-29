"use client";

import theme from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import React from "react";
import CartContextProvider from "@/contexts/cartContext";

const Providers = ({children}: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}><CartContextProvider>{children}</CartContextProvider></ThemeProvider>
);

export default Providers;
