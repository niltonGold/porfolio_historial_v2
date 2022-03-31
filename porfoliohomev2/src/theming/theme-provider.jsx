import {  ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { myTheme } from '../theming/theme.js'
import { ThemeContext } from '../theming/theme-context.js';
import * as React from 'react';



export default function ThemeProvider({children}){

    return(
        <ThemeContext.Provider value={[myTheme]}> 
            <MuiThemeProvider theme={myTheme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
    
}