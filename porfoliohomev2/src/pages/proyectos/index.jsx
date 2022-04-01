 import './style.css';
import { Stack } from '@mui/material';
import CardProyecto from '../../components/cardProyecto';
import videoProyecto from '../../components/videos/videos_proyectos/video_proyecto.mp4'
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import webResponsiveImagen from '../../imagenes/imagenes_proyectos/imagenes_proyecto_webresponsive/webResponsive.jpg';
import elTetris from '../../imagenes/imagenes_proyectos/imagenes_proyecto_tetris/tetris.jpg';
import tableroKanban from '../../imagenes/imagenes_proyectos/imagenes_proyecto_kanban/kanban.jpg';
import weatherApp from '../../imagenes/imagenes_proyectos/imagenes_proyecto_weatherapp/weather.png'
import fotoPorfolio from '../../imagenes/imagenes_porfolio/fotoPorfolio.jpg'


export default function Proyectos(){

            // TEXTO DE LO QUE ESTA ESCRITO ENCIMA DEL VIDEO
                function ProyectosTextoVideoOver(){
                    return(
                        <Stack sx={{ p:'1rem', gap:'1rem', position:'relative', width:'100%', height:'100%' }}>


                                <Stack  sx={{ flexDirection:'row', gap:'1rem'}}>

                                        <Typography sx={{ color:'white', textAlign:'center', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                            ¡Hola!, Soy <b>Nilton Enrique Medina Sayan</b>, soy un <b>WEB FULL STACK DEVELOPER</b> y este es mi <b>repositorio</b>, 
                                            un espacio donde me conocerás un poco más a nivel <b>personal</b>  y <b>profesional</b>.
                                        </Typography>

                                        <Avatar sx={{ width:{ xs:'4rem', md:'7rem' }, height:{ xs:'4rem', md:'7rem' } }} alt="Remy Sharp" src={fotoPorfolio} />

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
                    // PARTE DE DELANTE
                        // IMAGEN DE DELTANTE


                        // TEXO DE DELANTE
                        function WebResponsiveText(){
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
                                            WEB RESPONSIVE
                                    </Typography>

                                    <Typography
                                            sx={{   alignItems:'center',
                                                    height:'100%',
                                                    justifyContent:'center',
                                                    color:'white',
                                                    fontSize:'3rem',
                                                    wordBreak:'break-all',
                                                    fontWeight:'bold'  }} >
                                            ANIMADA
                                    </Typography>
                                    
                                </Stack>
                            )
                        }


                    // PARTE DE DETRAS
                        // TEXTO DE DETRAS


    // --------------------------------------------------------------------------  


            // DATOS DE LA CARD WEBRESPONSIVEANIMADA
                    // PARTE DE DELANTE
                        // IMAGEN DE DELTANTE


                        // TEXO DE DELANTE
                        const elTetrisTextFront = 'EL TETRIS';

                    // PARTE DE DETRAS
                        // TEXTO DE DETRAS
    
                    
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

                    <CardProyecto imagenFondoFrontProyectos={webResponsiveImagen} textoFrontProyectos={weatherAppTextFront}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={elTetris} textoFrontProyectos={elTetrisTextFront}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={tableroKanban} textoFrontProyectos={kanbanTextFront}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={weatherApp} textoFrontProyectos={weatherAppTextFront}></CardProyecto>


            </Stack>
      
    )
}
