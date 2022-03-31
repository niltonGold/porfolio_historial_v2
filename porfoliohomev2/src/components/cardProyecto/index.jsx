import * as React from 'react';
import { Stack } from '@mui/material';
import './style.css';


export default function CardProyecto(props) {
  return (
    <div className='cardProtecto-container_all'>


            <div className='cardProtecto-container-cardFront-cardBegin'>
            
                <Stack sx={{ 
                            width:'100%', 
                            height:'100%', 
                            position: 'absolute', 
                            WebkitBackfaceVisibility:'hidden', 
                            backfaceVisibility:'hidden', 
                            backgroundImage:`url(${props.imagenFondoFrontProyectos})`, 
                            backgroundSize:'100% 100%', 
                            borderRadius:'15px', p:'1rem' }}>

                        <p className='cardProtecto-texto_frontt'>{props.textoFrontProyectos}</p>

                </Stack>

                <div className='cardProtecto-Begin'>
                         detras
                </div>

            </div>
           

    </div>

  );
}