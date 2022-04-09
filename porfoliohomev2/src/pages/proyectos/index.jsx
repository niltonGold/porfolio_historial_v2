 import './style.css';
import { Stack } from '@mui/material';
import CardProyecto from '../../components/cardProyecto';
import videoProyecto from '../../components/videos/videos_proyectos/video_proyecto.mp4'
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import webResponsiveImagen from '../../imagenes/imagenes_proyectos/imagenes_proyecto_webresponsive/webResponsive.jpg';
import elTetris from '../../imagenes/imagenes_proyectos/imagenes_proyecto_tetris/tetris.jpg';
import tableroKanban from '../../imagenes/imagenes_proyectos/imagenes_proyecto_kanban/kanban.jpg';
import weatherApp from '../../imagenes/imagenes_proyectos/imagenes_proyecto_weatherapp/weather.png';
import fotoPorfolio from '../../imagenes/imagenes_porfolio/fotoPorfolio.jpg';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Proyectos(){

            // TEXTO DE LO QUE ESTA ESCRITO ENCIMA DEL VIDEO
                function ProyectosTextoVideoOver(){
                    return(
                        <Stack sx={{ p:'1rem', gap:{ xs:'0.1rem', sm:'1rem' }, position:'relative', width:'100%', height:'100%' }}>


                                <Stack  sx={{ flexDirection:'row', gap:'1rem'}}>

                                        <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                            ¡Hola!, Soy <b>Nilton Enrique Medina Sayan</b>, soy un <b>WEB FULL STACK DEVELOPER</b> y este es mi <b>repositorio</b>, 
                                            un espacio donde me conocerás un poco más a nivel <b>personal</b>  y <b>profesional</b>.
                                        </Typography>

                                        <Avatar sx={{ width:{ xs:'4rem', md:'9rem' }, height:{ xs:'4rem', md:'9rem' } }} alt="Remy Sharp" src={fotoPorfolio} />

                                </Stack>


                                <Typography sx={{ color:'white', textAlign:'center', fontWeight:'bold', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify' }} >
                                    ¿Que es lo que se hacer?
                                </Typography>


                                <Stack sx={{ flexDirection:'column', gap:'1rem' }}>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', textAlign:'center', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                                    Manejo conceptos básicos de <b>GITHUB</b> como, repositorios de código, <b>COMMINT</b>
                                                    , <b>PUSH</b>, <b>PULL</b>, <b>FECHT</b>, <b>RESET</b>, <b>RAMAS</b>, <b>MERGE</b>, repositorios <b>remotos</b>, etc.
                                                </Typography>

                                        </Stack>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', textAlign:'center', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center'}} >
                                                    Realizo páginas web completas <b>END to END</b>, es decir desde el <b>Front-End</b> hasta el <b>Back-End</b>. 
                                                </Typography>

                                        </Stack>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', textAlign:'center', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                                    Para hacer el <b>Front-End</b> manejo conceptos como el <b>HTML</b>, <b>CSS</b>, <b>JAVASCRIPT</b>
                                                    , la libreria <b>REACT</b> y el <b>REACT UI FRAMEWORK MUI</b>.
                                                </Typography>

                                        </Stack>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', textAlign:'center', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                                    Para hacer el <b>Back-End</b> manejo conceptos como el <b>NODE JS</b>, <b>EXPRESS</b>
                                                    , <b>MONGO DB</b> y la <b>arquitectura MVC</b>.
                                                </Typography>

                                        </Stack>

                                </Stack>


                        </Stack>
                    )
                }



            // DATOS DE LA CARD WEBRESPONSIVEANIMADA
                    // TEXO DE DELANTE
                        function WebResponsiveTextFront(){
                            return(
                                <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                    <Typography 
                                            sx={{   alignItems:'center',
                                                    height:'100%',
                                                    justifyContent:'center',
                                                    color:'white',
                                                    // fontSize:'3rem',
                                                    fontSize:{ xs:'1rem', md:'3rem' },
                                                    wordBreak:'break-all',
                                                    fontWeight:'bold'  }} >
                                            WEB RESPONSIVE
                                    </Typography>

                                    <Typography
                                            sx={{   alignItems:'center',
                                                    height:'100%',
                                                    justifyContent:'center',
                                                    color:'white',
                                                    fontSize:{ xs:'1rem', md:'3rem' },
                                                    wordBreak:'break-all',
                                                    fontWeight:'bold'  }} >
                                            ANIMADA
                                    </Typography>
                                    
                                </Stack>
                            )
                        }


                    // TEXTO DE DETRAS
                        function WebResponsiveTextBegin(){
                            return(
                                <Stack sx={{ flexDirection:'column', textAlign:'center', p:'2rem', gap:'2rem', pt:'2rem' }}>

                                            <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                    <Stack sx={{ width:{ xs:'100%', sm:'40%'}, textAlign:'left', color:'white', fontSize:{ xs:'x-small', md:'large' }, fontWeight:'bold' }}>
                                                            - Tecnologías Utilizadas .- 
                                                    </Stack>

                                                    <Typography
                                                            sx={{   alignItems:'left',
                                                                    height:'100%',
                                                                    justifyContent:'center',
                                                                    color:'white',
                                                                    fontSize:{ xs:'x-small', md:'large' },
                                                                    // wordBreak:'break-all',
                                                                    // backgroundColor:'red',
                                                                    textAlign:'justify',
                                                                   
                                                                    width:{ xs:'100%', sm:'60%'}  }} >
                                                            HTML, CSS
                                                    </Typography>

                                            </Stack>
                                            

                                            <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                    <Stack sx={{ width:{ xs:'100%', sm:'30%'}, textAlign:'left', color:'white', fontSize:{ xs:'x-small', md:'large' }, fontWeight:'bold' }}>
                                                        - Descripción .- 
                                                    </Stack>

                                                    <Typography
                                                            sx={{   alignItems:'center',
                                                                    height:'100%',
                                                                    justifyContent:'center',
                                                                    color:'white',
                                                                    fontSize:{ xs:'x-small', md:'large' },
                                                                    // wordBreak:'break-all',
                                                                    textAlign:'justify',
                                                                    // fontWeight:'bold',
                                                                    width:{ xs:'100%', sm:'70%'}  }} >
                                                            Esta web está dividida en 3 partes, la primera parte es un video con opacidad y un título 
                                                        por encima, la segunda parte son 3 cards que giran al pasar el ratón por encima y la tercera parte son 3 cards para 
                                                        poder elegir diferentes paquetes de precios. Los botones, los íconos de redes sociales y el círculo "Most popular" son enlace,
                                                         toda la web se puede ver en pantallas grandes y pequeñas.
                                                    </Typography>

                                            </Stack>


                                            <Stack sx={{ alignItems :'center', width:'100%' }}>
                                                    <Stack sx={{ alignContent:'center', width:{ xs:'60%', sm:'40%' } }}>
                                                            
                                                                <Button sx={{ ":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' }  }} >
                                                                    
                                                                    <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                    <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href="https://www.google.com/">
                                                                                Enlace Al Proyecto
                                                                    </a>
                                                        
                                                                </Button>
                                                            
                                                    </Stack>

                                            </Stack>

                                </Stack>
                            )
                        }


    // --------------------------------------------------------------------------  


            // DATOS DE LA CARD WEBRESPONSIVEANIMADA
                    // TEXO DE DELANTE
                    function ElTetrisTextFront(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                <Typography 
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                // fontSize:'3rem',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        EL
                                </Typography>

                                <Typography
                                        sx={{   alignItems:'center',
                                                height:'100%',
                                                justifyContent:'center',
                                                color:'white',
                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                wordBreak:'break-all',
                                                fontWeight:'bold'  }} >
                                        TETRIS
                                </Typography>
                                
                            </Stack>
                        )
                    }


                // TEXTO DE DETRAS
                    function ElTetrisTextBegin(){
                        return(
                            <Stack sx={{ flexDirection:'column', textAlign:'center', p:'0.5rem', gap:'2rem', pt:'2rem' }}>

                                        <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                <Stack sx={{ width:{ xs:'100%', sm:'40%'}, textAlign:'left', color:'white', fontSize:{ xs:'x-small', md:'large' }, fontWeight:'bold' }}>
                                                        - Tecnologías Utilizadas .- 
                                                </Stack>

                                                <Typography
                                                        sx={{   alignItems:'left',
                                                                height:'100%',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                // wordBreak:'break-all',
                                                                // backgroundColor:'red',
                                                                textAlign:'justify',
                                                               
                                                                width:{ xs:'100%', sm:'60%'}  }} >
                                                        HTML, CSS y Vanilla JAVASCRIPT
                                                </Typography>

                                        </Stack>
                                        

                                        <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                <Stack sx={{ width:{ xs:'100%', sm:'30%'}, textAlign:'left', color:'white', fontSize:{ xs:'x-small', md:'large' }, fontWeight:'bold' }}>
                                                    - Descripción .- 
                                                </Stack>

                                                <Typography
                                                        sx={{   alignItems:'center',
                                                                height:'100%',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'x-small', md:'large' },
                                                                // wordBreak:'break-all',
                                                                textAlign:'justify',
                                                                // fontWeight:'bold',
                                                                width:{ xs:'100%', sm:'70%'}  }} >
                                                        Esta web está dividida en 3 partes, la primera parte es un video con opacidad y un título 
                                                    por encima, la segunda parte son 3 cards que giran al pasar el ratón por encima y la tercera parte son 3 cards para 
                                                    poder elegir diferentes paquetes de precios. Los botones, los íconos de redes sociales y el círculo "Most popular" son enlace,
                                                     toda la web se puede ver en pantallas grandes y pequeñas.
                                                </Typography>

                                        </Stack>


                                        <Stack sx={{ alignItems :'center', width:'100%' }}>
                                                <Stack sx={{ alignContent:'center', width:{ xs:'60%', sm:'40%' } }}>
                                                        
                                                            <Button sx={{ ":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' }  }} >
                                                                
                                                                <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href="https://www.google.com/">
                                                                            Enlace Al Proyecto
                                                                </a>
                                                    
                                                            </Button>
                                                        
                                                </Stack>

                                        </Stack>

                            </Stack>
                        )
                    }
    
                    
    // -------------------------------------------------------------------------- 
    
    
            // DATOS DE LA CARD WEBRESPONSIVEANIMADA
                    // PARTE DE DELANTE
                        // IMAGEN DE DELTANTE


                        // TEXO DE DELANTE
                        const kanbanTextFront = 'TABLERO KANBAN';

                    // PARTE DE DETRAS
                        // TEXTO DE DETRAS


    // --------------------------------------------------------------------------  


            // DATOS DE LA CARD WEBRESPONSIVEANIMADA
                    // PARTE DE DELANTE
                        // IMAGEN DE DELTANTE


                        // TEXO DE DELANTE
                        const weatherAppTextFront = 'WEAETHER APP';

                    // PARTE DE DETRAS
                        // TEXTO DE DETRAS


 
    


    return(
    
            <Stack sx={{ width:'100%', gap:'1rem', alignItems:'center', p:'1rem' }}>


                    <div className='Proyectos_container-videoPresentation_textPresentation'>

                            <div className='Proyectos_videoPresentation'>
                                <video className='Proyectos_videoBackground' autoPlay="true" muted="muted" loop type="video/mp4" src={videoProyecto}></video>
                                <div className='Proyectos_videoBackground-opacity'></div>
                            </div>

                            <div className='Proyectos_textPresentation'>
                                {ProyectosTextoVideoOver()}
                            </div>
                    
                    </div>
     

                    <Stack sx={{ width:'80%', borderRadius:'15px', background:'#2A1A59', textAlign:'center', flexDirection:'row', justifyContent:'center', p:'0.5rem' }}>

                            <Stack sx={{ fontSize:'2rem' }}>
                                👇
                            </Stack>
                            <Typography sx={{ color:'white', fontSize:'bold', alignSelf:'center' }}>
                                PROYECTOS
                            </Typography>

                    </Stack>

                    <CardProyecto imagenFondoFrontProyectos={webResponsiveImagen} textoFrontProyectos={WebResponsiveTextFront()} textoBeginProyectos={WebResponsiveTextBegin()}></CardProyecto>

                    {/* <CardProyecto imagenFondoFrontProyectos={elTetris} textoFrontProyectos={elTetrisTextFront} textoBeginProyectos={}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={tableroKanban} textoFrontProyectos={kanbanTextFront} textoBeginProyectos={}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={weatherApp} textoFrontProyectos={weatherAppTextFront} textoBeginProyectos={}></CardProyecto> */}


            </Stack>
      
    )
}
