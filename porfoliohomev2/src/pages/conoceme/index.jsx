import { Fragment } from 'react';
import './style.css';
import { Stack } from '@mui/material';
import videoConoceme from '../../components/videos/videos_conoceme/video_conoceme.mp4'
import CardConoceme from '../../components/cardConoceme';
import Typography from '@mui/material/Typography';
import pasionesImagen from '../../imagenes/imagenes_conoceme/pasiones.jpg';
import caracteristicasPersonalesImagen from '../../imagenes/imagenes_conoceme/caracteristicasPersonales.jpg';
import habilidadesImagen from '../../imagenes/imagenes_conoceme/habilidades.jpg';
import otrasHabilidadesImagen from '../../imagenes/imagenes_conoceme/otrasHabilidades.jpg';
import adaptabilidadImagen from '../../imagenes/imagenes_conoceme/adaptabilidad.jpg'

export default function Conoceme(){

    // PASIONES
    const pasionesTitulo = 'PASIONES'



    // CARACTERISTICAS PERSONALES
    function caracteristicasPersonalesTitulo(){
        return(
            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                <Typography 
                        sx={{   alignItems:'center',
                                height:'100%',
                                justifyContent:'center',
                                color:'white',
                                fontSize:'3rem',
                                wordBreak:'break-all',
                                fontWeight:'bold'  }} >
                        CARACTERÍSTICAS
                </Typography>

                <Typography
                        sx={{   alignItems:'center',
                                height:'100%',
                                justifyContent:'center',
                                color:'white',
                                fontSize:'3rem',
                                wordBreak:'break-all',
                                fontWeight:'bold'  }} >
                        PERSONALES
                </Typography>
                
            </Stack>
        )
    }
    


    // HABILIDADES
    const habilidadesTitulo = 'HABILIDADES'



    // OTRAS HABILIDADES
    function otrasHabilidadesTitulo(){
        return(
            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                <Typography 
                        sx={{   alignItems:'center',
                                height:'100%',
                                justifyContent:'center',
                                color:'white',
                                fontSize:'3rem',
                                wordBreak:'break-all',
                                fontWeight:'bold'  }} >
                        OTRAS
                </Typography>

                <Typography
                        sx={{   alignItems:'center',
                                height:'100%',
                                justifyContent:'center',
                                color:'white',
                                fontSize:'3rem',
                                wordBreak:'break-all',
                                fontWeight:'bold'  }} >
                        HABILIDADES
                </Typography>
                
            </Stack>
        )
    }



    // ADAPTABILIDAD
    const adaptabilidadTitulo = 'ADAPTABILIDAD';



    return(
        <Stack sx={{ width:'100%', gap:'1rem', alignItems:'center', p:'1rem' }}>
            
            <div className='container-videoPresentation_textPresentation'>

                            <div className='videoPresentation'>
                                <video className='videoBackground' autoPlay="true" muted="muted" loop type="video/mp4" src={videoConoceme}></video>
                                <div className='videoBackground-opacity'></div>
                            </div>

                            
                            <div className='textPresentation'>
                                <h1>presentation</h1>
                            </div>
            
            </div>

            <CardConoceme imagenConoceme={pasionesImagen} textoFrontConoceme={pasionesTitulo}></CardConoceme>

            <CardConoceme imagenConoceme={caracteristicasPersonalesImagen} textoFrontConoceme={caracteristicasPersonalesTitulo()}></CardConoceme>

            <CardConoceme imagenConoceme={habilidadesImagen} textoFrontConoceme={habilidadesTitulo}></CardConoceme>

            <CardConoceme imagenConoceme={otrasHabilidadesImagen} textoFrontConoceme={otrasHabilidadesTitulo()}></CardConoceme>

            <CardConoceme imagenConoceme={adaptabilidadImagen} textoFrontConoceme={adaptabilidadTitulo}></CardConoceme>

     
            
        </Stack>
    )
}
