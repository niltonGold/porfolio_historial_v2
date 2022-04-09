import * as React from 'react';
import { Avatar, Stack } from '@mui/material';
import './style.css';


export default function CardContactame(props) {

  return (

    <div className='ContactameCard-container_all'>

            <div className='ContactameCard-container-cardFront-cardBegin'>

                {/* Parte de Delante */}
                <Stack sx={{ 
                            width:'100%', 
                            height:'100%', 
                            position: 'absolute', 
                            WebkitBackfaceVisibility:'hidden', 
                            backfaceVisibility:'hidden', 
                            backgroundImage:`url(${props.imagenFondoFrontContactame})`, 
                            backgroundSize:'100% 100%', 
                            borderRadius:'15px', p:'1rem' }}>


                        <div className='ContactameCard-Background-Opacity-Front'/>

                        
                            
                           
                        <p className='ContactameCard-texto_front'> 
                                <Avatar sx={{ width:{ xs:'4rem', md:'7rem' }, height:{ xs:'4rem', md:'7rem' } }} alt="Remy Sharp" src={props.imagenRedSocial} />
                                {props.redSocialDireccion}
                        </p>
                       

                        
                </Stack>

                {/* Parte de Detras */}
                {/* <div className='ContactameCard-Begin'>
                        {props.textoBeginContactame}
                </div> */}

            </div>
           
    </div>

  );
}