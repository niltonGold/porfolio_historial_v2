
import './style.css';
import videoContactame from '../../components/videos/videos_contactame/video_contactame.mp4';
import { Stack, Typography } from '@mui/material';
import CardContactame from '../../components/cardContactame';

import telefonoFondoImagen from '../../imagenes/imagenes_contactame/telefonoFondo.jpg';
import telefonoAvatar from '../../imagenes/imagenes_contactame/telefono.png';

import mailFondoImagen from '../../imagenes/imagenes_contactame/mailFondo.jpg';
import mailAvatar from '../../imagenes/imagenes_contactame/mail.png';

import linkedinFondoImagen from '../../imagenes/imagenes_contactame/linkedinFondo.jpg';
import linkedinAvatar from '../../imagenes/imagenes_contactame/linkedin.png';


const enlaceLinkedin = 'https://es.linkedin.com/in/nilton-medina-sayan-198a3222b/en?trk=people-guest_people_search-card';

export default function Contactame(){

    // TELEFONO
            function Telefono(){
                return(
                    <Stack>

                        <Typography
                                sx={{   alignItems:'center',
                                        height:'100%',
                                        // backgroundColor:'red',
                                        width:{ xs:'100%', md:'19rem' },
                                        textAlign:'left',
                                        justifyContent:'center',
                                        color:'white',
                                        fontSize:{ xs:'x-small', md:'large' },
                                        wordBreak:'break-all',
                                        fontWeight:'bold'  }} >
                                            
                                650 347 741 
                        </Typography>
                        
                        
                    </Stack>
                )
            }


    // MAIL
            function Mail(){
                return(
                    <Stack>

                        <Typography
                                sx={{   alignItems:'center',
                                        height:'100%',
                                        // backgroundColor:'red',
                                        width:{ xs:'100%', md:'19rem' },
                                        textAlign:'left',
                                        justifyContent:'center',
                                        color:'white',
                                        fontSize:{ xs:'x-small', md:'large' },
                                        wordBreak:'break-all',
                                        fontWeight:'bold'  }} >
                                            
                                niltonenrique3000@hotmail.com
                        </Typography>
                        
                        
                    </Stack>
                )
            }


    // LINKEDIN
            function Linkedin(){
                return(
                    <Stack>

                        <Typography
                                sx={{   alignItems:'center',
                                        height:'100%',
                                        width:{ xs:'100%', md:'19rem' },
                                        textAlign:'left',
                                        justifyContent:'center',
                                        color:'white',
                                        fontSize:{ xs:'x-small', md:'large' },
                                        wordBreak:'break-all',
                                        fontWeight:'bold'  }} >
                                            
                                            <a className='enlaceLinkedin' target="_blank" rel="noopener noreferrer" href={enlaceLinkedin} >

                                                    Nilton Medina Sayan

                                            </a>
                        </Typography>
                        
                        
                    </Stack>
                )
            }



    return(
        <Stack sx={{ width:'100%', gap:'1rem', alignItems:'center', p:'1rem' }}>
            
            <div className='Contactame_container-videoPresentation_textPresentation'>

                            <div className='Contactame_videoPresentation'>
                                <video className='Contactame_videoBackground' autoPlay="true" muted="muted" loop type="video/mp4" src={videoContactame}></video>
                                <div className='Contactame_videoBackground-opacity'></div>
                            </div>

                            
                            <div className='Contactame_textPresentation'>
                               Puedes ponerte en contacto conmigo a través de cualquiera de mis siguientes redes sociales.
                            </div>
            
            </div>

            <Stack sx={{ width:'80%', borderRadius:'15px', background:'#2A1A59', textAlign:'center', flexDirection:'row', justifyContent:'center', p:'0.5rem' }}>

                            <Stack sx={{ fontSize:'2rem' }}>
                                👇
                            </Stack>
                            <Typography sx={{ color:'white', fontSize:'bold', alignSelf:'center', fontWeight:'bold' }}>
                                CONTÁCTAME
                            </Typography>

            </Stack>

            <CardContactame imagenFondoFrontContactame={telefonoFondoImagen} imagenRedSocial={telefonoAvatar} redSocialDireccion={Telefono()}></CardContactame>

            <CardContactame imagenFondoFrontContactame={mailFondoImagen} imagenRedSocial={mailAvatar} redSocialDireccion={Mail()}></CardContactame>

            <CardContactame imagenFondoFrontContactame={linkedinFondoImagen} imagenRedSocial={linkedinAvatar} redSocialDireccion={Linkedin()}></CardContactame>

            
        </Stack>
    )
}
