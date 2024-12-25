import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode: "light",
    setDarkMode: () => {},
    setLightMode: () => {}
    }
);

export const ThemeProvider = ThemeContext.Provider;

export default function themeContextProvider(){
    useContext(ThemeContext);
}