 import './style.css';
import { Stack } from '@mui/material';
import CardProyecto from '../../components/cardProyecto';
import videoProyecto from '../../components/videos/videos_proyectos/video_proyecto.mp4'
import Typography from '@mui/material/Typography';

import webResponsiveImagen from '../../imagenes/imagenes_proyectos/imagenes_proyecto_webresponsive/webResponsive.jpg';
import elTetris from '../../imagenes/imagenes_proyectos/imagenes_proyecto_tetris/tetris.jpg';
import tableroKanban from '../../imagenes/imagenes_proyectos/imagenes_proyecto_kanban/kanban.jpg';
import weatherApp from '../../imagenes/imagenes_proyectos/imagenes_proyecto_weatherapp/weather.png'


export default function Proyectos(){

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


                    <div className='container-videoPresentation_textPresentation'>

                            <div className='videoPresentation'>
                                <video className='videoBackground' autoPlay="true" muted="muted" loop type="video/mp4" src={videoProyecto}></video>
                                <div className='videoBackground-opacityy'></div>
                            </div>

                            <div className='textPresentation'>
                                <h1>presentation</h1>
                            </div>
                    
                    </div>

                    <CardProyecto imagenFondoFrontProyectos={webResponsiveImagen} textoFrontProyectos={WebResponsiveText()}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={elTetris} textoFrontProyectos={elTetrisTextFront}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={tableroKanban} textoFrontProyectos={kanbanTextFront}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={weatherApp} textoFrontProyectos={weatherAppTextFront}></CardProyecto>


            </Stack>
      
    )
}
