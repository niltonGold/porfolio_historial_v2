
import './style.css';
import videoContactame from '../../components/videos/videos_contactame/video_contactame.mp4';
import { Stack, Typography } from '@mui/material';
import CardContactame from '../../components/cardContactame';
import twitterFondoImagen from '../../imagenes/imagenes_contactame/twitterFondo.jpg';
import { Avatar } from '@mui/material';
import twitterAvatar from '../../imagenes/imagenes_contactame/twitter.png';


export default function Contactame(){

    function Front(){
        return(
            <Stack>

                <Typography
                        sx={{   alignItems:'center',
                                height:'100%',
                                justifyContent:'center',
                                color:'white',
                                fontSize:{ xs:'x-small', md:'large' },
                                wordBreak:'break-all',
                                fontWeight:'bold'  }} >
                                    
                        twitter
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
                                Conoceme por mis redes sociales
                            </div>
            
            </div>

            <Stack sx={{ width:'80%', borderRadius:'15px', background:'#2A1A59', textAlign:'center', flexDirection:'row', justifyContent:'center', p:'0.5rem' }}>

                            <Stack sx={{ fontSize:'2rem' }}>
                                👇
                            </Stack>

            </Stack>

            <CardContactame imagenFondoFrontContactame={twitterFondoImagen} imagenRedSocial={twitterAvatar} redSocialDireccion={Front()}></CardContactame>

            

      
        </Stack>
    )
}
