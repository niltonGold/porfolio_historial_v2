import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';
import oswald from '../fonts/Oswald-Bold.ttf'
import { orange } from '@mui/material/colors';

export const myTheme = createTheme ({


            typography:{
                fontFamily: oswald,
                body1: {
                    color: 'black'
                }
            },

            palette:{
                primary:{
                    main:blue[800],
                    dark:'#003c8f'
                },
                secondary:{
                    main:orange[200],
                    dark:'#ca9b52'
                },
            }


});


