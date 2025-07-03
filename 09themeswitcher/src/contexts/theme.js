import { createContext, useContext } from "react";

// Create context but this time we are giving the default value
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

// making context provider into same file
export const ThemeProvider = ThemeContext.Provider

// for reducing all time import context 
export default function useTheme(){
    return useContext(ThemeContext)
}