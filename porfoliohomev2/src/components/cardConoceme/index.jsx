import * as React from 'react';
import { Stack } from '@mui/material';
import './style.css';

export default function CardConoceme(props) {
  return (
    <div className='card-container_all'>


            <div className='card-container-cardFront-cardBegin'>
            
                <Stack sx={{ 
                              width:'100%', 
                              height:'100%', 
                              position: 'absolute', 
                              WebkitBackfaceVisibility:'hidden', 
                              backfaceVisibility:'hidden', 
                              backgroundImage:`url(${props.imagenConoceme})`, 
                              backgroundSize:'100% 100%', 
                              borderRadius:'15px', p:'1rem' }}>
                  
                  <p className='texto_front'>{props.textoFrontConoceme}</p>
                </Stack>

                <div className='cardBegin'>
                         detras
                </div>

            </div>
           

    </div>

  );
}