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
import Button from '@mui/material/Button';
import pdf from '../../components/documentos/curriculumVitae.pdf';

export default function Conoceme(){
   

    // PASIONES
            // TITULO DE DELANTE DE LA CARD PASIONES
                    function PasionesTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        PASIONES
                                </Typography>
                                
                            </Stack>
                        )
                    }


            // TEXTO DE DETRAS DE LA CARD PASIONES
                    function PasionesTextBegin(){
                        return(
                            <Stack sx={{ textAlign:'center', p:'2rem', height:'100%', pt:'3rem' }}>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                textAlign:'justify',  
                                                                width:'100%' }} >

                                                    ❤️ Me gusta mucho que las cosas estén muy ordenadas, tal y como se muestra en la página de mi porfolio 
                                                    , para ello utilizo mucho el CSS y el React UI Framework MUI.

                                                </Typography>

                            </Stack>
                        )
                    }




    // CARACTERISTICAS PERSONALES
            // TITULO DE DELANTE DE CARACTERISTICAS PERSONALES
                    function CaracteristicasPersonalesTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        CARACTERÍSTICAS
                                </Typography>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        PERSONALES
                                </Typography>
                                
                            </Stack>
                        )
                    }


            // TEXTO DE DETRAS DE CARACTERISTICAS PERSONALES
                    function CaracteristicasPersonalesTextBegin(){
                        return(
                            <Stack sx={{ textAlign:'center', p:'2rem', height:'100%', pt:'3rem' }}>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                textAlign:'justify',  
                                                                width:'100%' }} >

                                                    💻Soy una persona muy responsable, trabajadora, ordenada y sobre todo muy puntual, 
                                                     la puntualidad es muy importante para mi, además cuando me comprometo a algo no 
                                                    para hasta que lo termino todo, me gusta mucho buscar constantemente soluciones a los problemas. 

                                                </Typography>

                            </Stack>
                        )
                    }


    // HABILIDADES
            // TITULO DE DELANTE DE HABILIDADES
                    function HabilidadesTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        HABILIDADES
                                </Typography>
                                
                            </Stack>
                        )
                    }


            // TEXTO DE DETRAS DE CARACTERISTICAS PERSONALES
                    function HabilidadesTextBegin(){
                        return(
                            <Stack sx={{ textAlign:'center', p:'2rem', height:'100%', pt:'3rem' }}>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                textAlign:'justify',  
                                                                width:'100%' }} >

                                                    🎳 Mis habilidades fundamentales son el FULL STACK, es decir el desarrollo web desde el 
                                                    Front-End hasta el Back-End utilizando para ello HTML, CSS, JAVASCRIPT, la libreria REACT y 
                                                    NODE JS, para poder realizar el FULL STACK estudié el STACK MERN ( MongDB, ExpressJS, ReactJS, NodeJS ).

                                                </Typography>

                            </Stack>
                        )
                    }



    // OTRAS HABILIDADES
            // TITULO DE DELANTE DE OTRAS HABILIDADES
                    function OtrasHabilidadesTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        OTRAS
                                </Typography>
                                
                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        HABILIDADES
                                </Typography>

                            </Stack>
                        )
                    }


            // TEXTO DE DETRAS DE OTRAS HABILIDADES
                    function OtrasHabilidadesTextBegin(){
                        return(
                            <Stack sx={{ textAlign:'center', p:'2rem', height:'100%', pt:'3rem' }}>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                textAlign:'justify',  
                                                                width:'100%' }} >

                                                    💪 Además de mis conocimientos en FULL STACK también tengo otros conocimientos extras como, conceptos básicos de 
                                                    Java, Pascal, administración y gestión de redes, además de conocimientos básicos de entornos de sistemas operativos 
                                                    como Windows o Linux.

                                                </Typography>

                            </Stack>
                        )
                    }



    // ADAPTABILIDAD
            // TITULO DE DELANTE DE ADAPTABILIDAD
                    function AdaptabilidadTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        ADAPTABILIDAD
                                </Typography>

                            </Stack>
                        )
                    }


            // TEXTO DE DETRAS DE OTRAS HABILIDADES
                    function AdaptabilidadTextBegin(){
                        return(
                            <Stack sx={{ textAlign:'center', p:'2rem', height:'100%', pt:'3rem' }}>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                textAlign:'justify',  
                                                                width:'100%' }} >

                                                    📌 Me adapto a casi cualquier situación que se me presente, si hace falta revisar la documentación de 
                                                    algún otro código de programación ajeno a lo que estudié lo hago sin ningun problema, cualquier cosa nueva 
                                                    de la que me tenga que documentar me lo tomo como un reto a superar.

                                                </Typography>

                            </Stack>
                        )
                    }




    return(
        <Stack sx={{ width:'100%', gap:'1rem', alignItems:'center', p:'1rem' }}>
            
            <div className='Conoceme_container-videoPresentation_textPresentation'>

                            <div className='Conoceme_videoPresentation'>
                                <video className='Conoceme_videoBackground' autoPlay="true" muted="muted" loop type="video/mp4" src={videoConoceme}></video>
                                <div className='Conoceme_videoBackground-opacity'></div>
                            </div>

                            
                            <div className='Conoceme_textPresentation'>

                                    Soy Nilton Medina Sayan y aquí te comento como soy a nivel personal y profesional

                                    <a className='porfolio_link_download_conoceme' href={pdf} target="_blank" rel="noopener noreferrer" download="CurriculumVitae.pdf">

                                            <div>👉</div>

                                            <Button variant="contained" sx={{ height:'2rem', color:'white', fontWeight:'bold', backgroundColor:'orange', fontSize:{ xs:'x-small', md:'large' } }} >          
                                                    DESCARGA MI CV                 
                                            </Button>

                                            <div>👈</div>

                                    </a> 

                            </div>

                            
                           
            
            </div>

            <Stack sx={{ width:'80%', borderRadius:'15px', background:'#2A1A59', textAlign:'center', flexDirection:'row', justifyContent:'center', p:'0.5rem' }}>

                            <Stack sx={{ fontSize:'2rem' }}>
                                👇
                            </Stack>
                            <Typography sx={{ color:'white', fontSize:'bold', alignSelf:'center', fontWeight:'bold' }}>
                                CONÓCEME
                            </Typography>

            </Stack>

            <CardConoceme imagenFondoFrontConoceme={pasionesImagen} textoFrontConoceme={PasionesTextFront()} textoBeginConoceme={PasionesTextBegin()} ></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={caracteristicasPersonalesImagen} textoFrontConoceme={CaracteristicasPersonalesTextFront()} textoBeginConoceme={CaracteristicasPersonalesTextBegin()}></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={habilidadesImagen} textoFrontConoceme={HabilidadesTextFront()} textoBeginConoceme={HabilidadesTextBegin()} ></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={otrasHabilidadesImagen} textoFrontConoceme={OtrasHabilidadesTextFront()} textoBeginConoceme={OtrasHabilidadesTextBegin()} ></CardConoceme>

            <CardConoceme imagenFondoFrontConoceme={adaptabilidadImagen} textoFrontConoceme={AdaptabilidadTextFront()} textoBeginConoceme={AdaptabilidadTextBegin()} ></CardConoceme>

     
            
        </Stack>
    )
}
