"use client"

import { ThemeProvider as Theme } from "next-themes";
import ThemeSwitch from "@/components/ThemeSwitch";

const ThemeProvider = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <Theme defaultTheme="light">
            {children}
            <ThemeSwitch />
        </Theme>
    );
}

export default ThemeProvider;