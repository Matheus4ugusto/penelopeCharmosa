"use client";

import theme from "@/styles/theme";
import {ThemeProvider} from "styled-components";
import React from "react";

const Providers = ({children}: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Providers;
