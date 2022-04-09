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
    // TEXTO DE LO QUE ESTA ESCRITO ENCIMA DEL VIDEO
    function ConocmeTextoVideoOver(){
        return(
            <Stack sx={{ p:'1rem', gap:'1rem', width:'100%', height:'100%' }}>


                    <Stack  sx={{ flexDirection:'row', gap:'1rem'}}>

                            <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                Soy Nilton Medina Sayan y aquí te comento cómo soy a nivel personal y profesional
                            </Typography>


                    </Stack>


            </Stack>
        )
    }

    // PASIONES
            // TITULO DE DELANTE DE LA CARD
                    function PasionesTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:'3rem',
                                                //fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        PASIONES
                                </Typography>
                                
                            </Stack>
                        )
                    }


            // TEXTO DE DETRAS DE LA CARD
                    function PasionesTextBegin(){
                        return(
                            <Stack sx={{ textAlign:'center', p:'2rem', height:'100%', pt:'3rem' }}>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                        
                                                                justifyContent:'center',
                                                                color:'white',
                                                                
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                textAlign:'justify',
                                                                // fontWeight:'bold',
                                                                
                                                                width:'100%' }} >
                                                        Esta web está dividida en 3 partes, la primera parte es un video con opacidad y un título 
                                                    por encima, la segunda parte son 3 cards que giran al pasar el ratón por encima y la tercera parte son 3 cards para 
                                                    poder elegir diferentes paquetes de precios. Los botones, los íconos de redes sociales y el círculo "Most popular" son enlace,
                                                    toda la web se puede ver en pantallas grandes y pequeñas.
                                                </Typography>

                            </Stack>
                        )
                    }



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
            
            <div className='Conoceme_container-videoPresentation_textPresentation'>

                            <div className='Conoceme_videoPresentation'>
                                <video className='Conoceme_videoBackground' autoPlay="true" muted="muted" loop type="video/mp4" src={videoConoceme}></video>
                                <div className='Conoceme_videoBackground-opacity'></div>
                            </div>

                            
                            <div className='Conoceme_textPresentation'>
                            Soy Nilton Medina Sayan y aquí te comento cómo soy a nivel personal y profesional
                            </div>
            
            </div>

            <Stack sx={{ width:'80%', borderRadius:'15px', background:'#2A1A59', textAlign:'center', flexDirection:'row', justifyContent:'center', p:'0.5rem' }}>

                            <Stack sx={{ fontSize:'2rem' }}>
                                👇
                            </Stack>


            </Stack>

            <CardConoceme imagenFondoFrontConoceme={pasionesImagen} textoFrontConoceme={PasionesTextFront()} textoBeginConoceme={PasionesTextBegin()} ></CardConoceme>

            {/* <CardConoceme imagenFondoFrontConoceme={caracteristicasPersonalesImagen} textoFrontConoceme={caracteristicasPersonalesTitulo()}></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={habilidadesImagen} textoFrontConoceme={habilidadesTitulo}></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={otrasHabilidadesImagen} textoFrontConoceme={otrasHabilidadesTitulo()}></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={adaptabilidadImagen} textoFrontConoceme={adaptabilidadTitulo}></CardConoceme> */}

     
            
        </Stack>
    )
}
