"use client"
import ThemeProvider from "./ThemeProvider";

const ClientProviders = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}

export default ClientProviders;