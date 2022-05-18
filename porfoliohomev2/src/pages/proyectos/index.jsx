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


const enlaceAlProyectoWebResponsive = 'https://webresponsiveanimada.herokuapp.com/';
const enlaceAlProyectoWebResponsiveGitHub = 'https://github.com/niltonGold/proyecto_WebResponsiveAnimadaV2.git';

const enlaceAlProyectoTetris = 'https://webtetris.herokuapp.com/';
const enlaceAlProyectoTetrisGitHub = 'https://github.com/niltonGold/proyecto_ElTetrisV2.git';

const enlaceAlProyectoKanban = 'https://tablerokanbannil.herokuapp.com/';
const enlaceAlProyectoKanbanGitHub = 'https://github.com/niltonGold/proyecto_TableroKanbanV2.git';


const enlaceAlProyectoWeatherApp = 'https://weatherappnil.herokuapp.com/';
const enlaceAlProyectoWeatherAppGitHub = 'https://github.com/niltonGold/proyecto_TableroKanbanV2.git';



export default function Proyectos(){

            // TEXTO DE LO QUE ESTA ESCRITO ENCIMA DEL VIDEO
                function ProyectosTextoVideoOver(){
                    return(
                        <Stack sx={{ p:'1rem', gap:{ xs:'0.1rem', sm:'1rem' }, position:'relative', width:'100%', height:'100%' }}>


                                <Stack  sx={{ flexDirection:'row', gap:'1rem'}}>

                                        <Typography sx={{ color:'white', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                        🖐️¡Hola!, Soy <b>Nilton Enrique Medina Sayan</b>, soy un <b>WEB FULL STACK DEVELOPER</b> y este es mi <b>repositorio</b>, 
                                            un espacio⭐ donde me conocerás un poco más a nivel <b>personal</b>  y <b>profesional</b>.
                                        </Typography>

                                        <Avatar sx={{ width:{ xs:'4rem', md:'9rem' }, height:{ xs:'4rem', md:'9rem' } }} alt="Remy Sharp" src={fotoPorfolio} />

                                </Stack>


                                <Typography sx={{ color:'white', fontWeight:'bold', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify' }} >
                                🛠¿Que es lo que se hacer?
                                </Typography>


                                <Stack sx={{ flexDirection:'column', gap:'1rem' }}>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                                🤏Manejo conceptos básicos de <b>GITHUB</b> como, repositorios de código, <b>COMMINT</b>
                                                    , <b>PUSH</b>, <b>PULL</b>, <b>FECHT</b>, <b>RESET</b>, <b>RAMAS</b>, <b>MERGE</b>, repositorios <b>remotos</b>, etc.
                                                </Typography>

                                        </Stack>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center'}} >
                                                📌Realizo páginas web completas <b>END to END</b>, es decir desde el <b>Front-End</b> hasta el <b>Back-End</b>. 
                                                </Typography>

                                        </Stack>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                                📗Para hacer el <b>Front-End</b> manejo conceptos como el <b>HTML</b>, <b>CSS</b>, <b>JAVASCRIPT</b>
                                                    , la libreria <b>REACT</b> y el <b>REACT UI FRAMEWORK MUI</b>.
                                                </Typography>

                                        </Stack>

                                        <Stack sx={{ flexDirection:'row', gap:'1rem' }}>

                                                <Typography sx={{ color:'white', fontWeight:'bold', fontSize:'large', textAlign:'justify' }} >
                                                    -
                                                </Typography>

                                                <Typography sx={{ color:'white', fontSize:{ xs:'x-small', md:'large' }, textAlign:'justify', alignSelf:'center' }} >
                                                📙Para hacer el <b>Back-End</b> manejo conceptos como el <b>NODE JS</b>, <b>EXPRESS</b>
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

                                            <Typography  sx={{  alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    WEB RESPONSIVE

                                            </Typography>

                                            <Typography  sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    ANIMADA
                                                    
                                                    
                                            </Typography>
                                        
                                    </Stack>
                                )
                            }


                    // TEXTO DE DETRAS
                            function WebResponsiveTextBegin(){
                                return(
                             
                                    <Stack sx={{ flexDirection:'column', textAlign:'center', p:'2rem', gap:{ xs:'1rem', md:'2rem' }, pt:'2rem' }}>
                                             

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'40%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                                - Tecnologías Utilizadas .-
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'left',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'60%'}  }} >

                                                                HTML, CSS

                                                        </Typography>

                                                </Stack>
                                                

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'30%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                            - Descripción .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'center',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'x-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'70%'}  }} >

                                                            Esta web está dividida ✂ en 3 partes, la primera parte es un video 📺 con opacidad y un título 
                                                            por encima, la segunda parte son 3 cards que giran al pasar el 🖱 ratón por encima y la tercera parte son 3 cards para 
                                                            poder elegir diferentes paquetes de precios. Los botones, los íconos de redes sociales y el círculo "Most popular" son 📎 enlaces,
                                                            toda la web se puede ver en pantallas grandes y pequeñas.

                                                        </Typography>

                                                </Stack>


                                                <Stack sx={{ alignItems :'flex-end', width:'100%' }}>

                                                        <Stack sx={{  width:{ xs:'60%', sm:'35%' }, gap:'1rem' }}>
                                                                
                                                                
                                                                    <Button sx={{ justifyContent:'left', ":hover":{ justifyItems:'center', backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' } }} >
                                                                    
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoWebResponsive}>

                                                                                    Enlace Al Proyecto

                                                                        </a>
                      
                                                            
                                                                    </Button>
                                                                   


                                                                    <Button sx={{ justifyContent:'left', ":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' } }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoWebResponsiveGitHub}>

                                                                                    Enlace  Al  GitHub

                                                                        </a>
                                                            
                                                                    </Button>
                                                                

                                                        </Stack>



                                                </Stack>
                                                

                                    </Stack>
                                   
                                )
                            }


    // --------------------------------------------------------------------------  


            // DATOS DE LA CARD TETRIS
                    // TEXO DE DELANTE
                            function TetrisTextFront(){
                                return(
                                    <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                            <Typography  sx={{  alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    EL

                                            </Typography>

                                            <Typography  sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    TETRIS
                                                    
                                            </Typography>
                                        
                                    </Stack>
                                )
                            }


                    // TEXTO DE DETRAS
                            function TetrisTextBegin(){
                                return(
                                    <Stack sx={{ flexDirection:'column', textAlign:'center', p:'2rem', gap:{ xs:'1rem', md:'2rem' }, pt:'2rem' }}>

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'40%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                                - Tecnologías Utilizadas .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'left',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'60%'}  }} >

                                                                HTML, CSS y Vanilla JAVASCRIPT

                                                        </Typography>

                                                </Stack>
                                                

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'30%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                            - Descripción .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'center',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'70%'}  }} >

                                                            👾En esta web se puede jugar el 🎮 clásico juego del tetris, su funcionamiento es muy básico, con las flechas del teclado se pueden 
                                                            controlar los tetrominios, el juego tiene un cuadro pequeño donde se puede ver el score que suma el puntaje, el siguiente tetrominio 
                                                            que viene y cuando se pierde el juego sale una pantalla que te permite reiniciar el juego.

                                                        </Typography>

                                                </Stack>


                                                <Stack sx={{ alignItems :'flex-end', width:'100%' }}>

                                                        <Stack sx={{ width:{ xs:'60%', sm:'35%' },gap:'1rem'  }}>
                                                                
                                                                    <Button sx={{ justifyContent:'left', ":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' }  }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoTetris} >

                                                                                    Enlace Al Proyecto

                                                                        </a>
                                                            
                                                                    </Button>



                                                                    <Button sx={{ justifyContent:'left',":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' } }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoTetrisGitHub}>

                                                                                    Enlace Al GitHub

                                                                        </a>
                                                            
                                                                    </Button>
                                                                
                                                        </Stack>

                                                </Stack>

                                    </Stack>
                                )
                            }
    
                    
    // -------------------------------------------------------------------------- 
    
    
            // DATOS DE LA CARD El TABLERO KANBAN
                    // TEXO DE DELANTE
                            function TableroKanbantFront(){
                                return(
                                    <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                            <Typography  sx={{  alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    TABLERO

                                            </Typography>

                                            <Typography  sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    KANBAN
                                                    
                                            </Typography>
                                        
                                    </Stack>
                                )
                            }


                    // TEXTO DE DETRAS
                            function TableroKanbanTextBegin(){
                                return(
                                    <Stack sx={{ flexDirection:'column', textAlign:'center', p:'2rem', gap:{ xs:'1rem', md:'2rem' }, pt:'2rem' }}>

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'40%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                                - Tecnologías Utilizadas .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'left',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'60%'}  }} >

                                                                HTML, CSS, JAVASCRIPT y ReactJS

                                                        </Typography>

                                                </Stack>
                                                

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'30%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                            - Descripción .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'center',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'70%'}  }} >

                                                            🗒Esta web es un tablero kanban básico de 3 columnas 🗂, se puede agregar, borrar, mover y buscar tareas, para 
                                                            el código he utlizado la estructura React npm, dentro del código utilizo mucho la herencia padre-hijo e 
                                                            hijo-padre para la creación de las columnas y tareas.

                                                        </Typography>

                                                </Stack>


                                                <Stack sx={{ alignItems :'flex-end', width:'100%' }}>

                                                        <Stack sx={{  width:{ xs:'60%', sm:'35%' }, gap:'1rem'  }}>
                                                                
                                                                    <Button sx={{ justifyContent:'left',":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' }  }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoKanban} >

                                                                                    Enlace Al Proyecto

                                                                        </a>
                                                            
                                                                    </Button>



                                                                    <Button sx={{ justifyContent:'left', ":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' } }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoKanbanGitHub}>

                                                                                    Enlace Al GitHub

                                                                        </a>
                                                            
                                                                    </Button>
                                                                
                                                        </Stack>

                                                </Stack>

                                    </Stack>
                                )
                            }


    // --------------------------------------------------------------------------  


            // DATOS DE LA CARD WEATHER APP
                    // TEXO DE DELANTE
                            function WeatherAppTextFront(){
                                return(
                                    <Stack sx={{ flexDirection:'column', textAlign:'center' }}>

                                            <Typography  sx={{  alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    WEATHER

                                            </Typography>

                                            <Typography  sx={{   alignItems:'center',
                                                                justifyContent:'center',
                                                                color:'white',
                                                                fontSize:{ xs:'1rem', md:'3rem' },
                                                                fontWeight:'bold'  }} >

                                                    APP
                                                    
                                            </Typography>
                                        
                                    </Stack>
                                )
                            }


                    // TEXTO DE DETRAS
                            function WeatherAppTextBegin(){
                                return(
                                    <Stack sx={{ flexDirection:'column', textAlign:'center', p:'2rem', gap:{ xs:'1rem', md:'2rem' }, pt:'2rem' }}>

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'40%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                                - Tecnologías Utilizadas .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'left',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'60%'}  }} >

                                                                HTML, CSS, JAVASCRIPT, ReactJS y APIS

                                                        </Typography>

                                                </Stack>
                                                

                                                <Stack sx={{ flexDirection:{ xs:'column', sm:'row' } }}>

                                                        <Stack sx={{ width:{ xs:'100%', sm:'30%'}, textAlign:'left', color:'white', fontSize:{ xs:'xx-small', md:'large' }, fontWeight:'bold' }}>
                                                            - Descripción .- 
                                                        </Stack>

                                                        <Typography
                                                                sx={{   alignItems:'center',
                                                                        height:'100%',
                                                                        justifyContent:'center',
                                                                        color:'white',
                                                                        fontSize:{ xs:'xx-small', md:'large' },
                                                                        textAlign:'justify',
                                                                        width:{ xs:'100%', sm:'70%'}  }} >

                                                            ☂Esta web es una aplicación donde se puede ver el clima de una ciudad en tiempo real, al escribir la ciudad correspondiente en el buscador  
                                                            aparecen los datos del clima del día actual y de los 7 siguientes días 🌅, en esta web estoy utilizando los datos de la 
                                                            API de la pagina OpenWeather.

                                                        </Typography>

                                                </Stack>


                                                <Stack sx={{ alignItems :'flex-end', width:'100%' }}>

                                                        <Stack sx={{ width:{ xs:'60%', sm:'35%' }, gap:'1rem' }}>
                                                                
                                                                    <Button sx={{ justifyContent:'left',":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' }  }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoWeatherApp} >

                                                                                    Enlace Al Proyecto

                                                                        </a>
                                                            
                                                                    </Button>


                                                                    <Button sx={{ justifyContent:'left',":hover":{ backgroundColor:'primary.main', color:'white' }, textTransform: 'capitalize', fontSize:{ xs:'small', md:'large' }, height:{ xs:'4rem', sm:'1.5rem' } }} >
                                                                        
                                                                        <InsertLinkIcon sx={{ fontSize:'2.5rem' }}></InsertLinkIcon> 

                                                                        <a className='enlace_al_proyecto' target="_blank" rel="noopener noreferrer" href={enlaceAlProyectoWeatherAppGitHub}>

                                                                                    Enlace Al GitHub

                                                                        </a>
                                                            
                                                                    </Button>
                                                                
                                                        </Stack>

                                                </Stack>

                                    </Stack>
                                )
                            }


        
    


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
                            <Typography sx={{ color:'white', fontSize:'bold', alignSelf:'center', fontWeight:'bold' }}>
                                PROYECTOS
                            </Typography>

                    </Stack>

                    <CardProyecto imagenFondoFrontProyectos={webResponsiveImagen} textoFrontProyectos={WebResponsiveTextFront()} textoBeginProyectos={WebResponsiveTextBegin()}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={elTetris} textoFrontProyectos={TetrisTextFront()} textoBeginProyectos={TetrisTextBegin()}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={tableroKanban} textoFrontProyectos={TableroKanbantFront()} textoBeginProyectos={TableroKanbanTextBegin()}></CardProyecto>

                    <CardProyecto imagenFondoFrontProyectos={weatherApp} textoFrontProyectos={WeatherAppTextFront()} textoBeginProyectos={WeatherAppTextBegin()}></CardProyecto>


            </Stack>
      
    )
}
