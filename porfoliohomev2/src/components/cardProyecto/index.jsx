import * as React from 'react';
import { Stack } from '@mui/material';
import './style.css';


export default function CardProyecto(props) {


return (

        <div className='ProyectoCard-container_all'>
    
                <div className='ProyectoCard-container-cardFront-cardBegin'>
    
                    {/* Parte de Delante */}
                    <Stack sx={{
                                width:'100%', 
                                height:'100%', 
                                position: 'absolute', 
                                WebkitBackfaceVisibility:'hidden', 
                                backfaceVisibility:'hidden', 
                                backgroundImage:`url(${props.imagenFondoFrontProyectos})`, 
                                backgroundSize:'100% 100%', 
                                borderRadius:'15px', p:'1rem' }}>
    
    
                            <div className='ProyectoCard-Background-Opacity-Front'/>
    
                            <p className='ProyectoCard-texto_front'>{props.textoFrontProyectos}</p>
    
                            
                    </Stack>
    
                    {/* Parte de Detras */}
                    {/* <div className='ProyectoCard-Begin'> */}
                    <div className='ProyectoCard-Begin'>
                            
                             {props.textoBeginProyectos}

                      
           
                        
    
                    </div>
                    
                </div>
               
        </div>
    
      );

}