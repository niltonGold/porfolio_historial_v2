import * as React from 'react';
import { Stack } from '@mui/material';
import './style.css';


export default function CardConoceme(props) {

  return (

    <div className='ConocemeCard-container_all'>

            <div className='ConocemeCard-container-cardFront-cardBegin'>

                        {/* Parte de Delante */}
                        <Stack sx={{ 
                                width:'100%', 
                                height:'100%', 
                                position: 'absolute', 
                                WebkitBackfaceVisibility:'hidden', 
                                backfaceVisibility:'hidden', 
                                backgroundImage:`url(${props.imagenFondoFrontConoceme})`, 
                                backgroundSize:'100% 100%', 
                               
                                borderRadius:'15px', p:'1rem' }}>


                                <div className='ConocemeCard-Background-Opacity-Front'/>

                                <p className='ConocemeCard-texto_front'>{props.textoFrontConoceme}</p>

                                
                        </Stack>

                        {/* Parte de Detras */}
                        <div className='ConocemeCard-Begin'>
                                {props.textoBeginConoceme}
                        </div>

            </div>
           
    </div>

  );
}