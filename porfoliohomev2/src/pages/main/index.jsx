import './style.css';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import { Stack } from '@mui/material';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Proyectos from '../proyectos';
import Conoceme from '../conoceme';
import Contactame from '../contactame';
import Avatar from '@mui/material/Avatar';
import logoPorfolio from '../../imagenes/imagenes_porfolio/logoPorfolio.png'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';





          function TabPanel(props) {

              const { children, value, index, ...other } = props;
            
              return (
                <div  role="tabpanel"  hidden={value !== index}  id={`simple-tabpanel-${index}`}  aria-labelledby={`simple-tab-${index}`}  {...other} >
                      {value === index && (
                        <Box sx={{ p: 3 }}>
                          <Typography>{children}</Typography>
                        </Box>
                          )}
                </div>
              );
          }
      



          TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired,
          };
      



          function a11yProps(index) {

              return {
                id: `simple-tab-${index}`,
                'aria-controls': `simple-tabpanel-${index}`,
              };
          }
      



          function ScrollTop(props) {

                const { children, window } = props;

                const trigger = useScrollTrigger({
                    target: window ? window() : undefined,
                    disableHysteresis: true,
                    threshold: 100,
                    });

                const handleClick = (event) => {

                const anchor = (event.target.ownerDocument || document).querySelector(
                    '#back-to-top-anchor',
                    );
        
                    if (anchor) {
                      anchor.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }
                };


              return (
                <Zoom in={trigger}>
                  <Box  onClick={handleClick}  role="presentation"  sx={{ position: 'fixed', bottom: 16, right: 16 }}
                  >
                    {children}
                  </Box>
                </Zoom>
              );
          }
      



          ScrollTop.propTypes = {
            children: PropTypes.element.isRequired,
            window: PropTypes.func,
          };
      



          function HideOnScroll(props) {

              const { children, window } = props;

              const trigger = useScrollTrigger({
                    target: window ? window() : undefined,
                  });


              return (
                <Slide appear={false} direction="down" in={!trigger}>
                  {children}
                </Slide>
              );
          }




          HideOnScroll.propTypes = {
            children: PropTypes.element.isRequired,
            window: PropTypes.func,
          };





export default function Main(props) {


    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    const [anchorElNav, setAnchorElNav] = React.useState(null);
       

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
       setAnchorElNav(null); 
    };





  return (
    <React.Fragment>

          <CssBaseline />

          <HideOnScroll {...props}>

                <AppBar sx={{ borderBottom:'solid 5px', borderColor:'orange' }}>

                      <Toolbar sx={{ backgroundColor:'white', justifyContent:'center', justifyContent:'space-between', p:'0.5rem'}}>

                                <Avatar sx={{ width:'5rem', height:'5rem' }} alt="Remy Sharp" src={logoPorfolio}></Avatar>

                        

                                {/* Menu del medio del Header */}
                                <Box sx={{ width:'100%', justifyContent:'center', borderBottom: 0, borderColor: 'divider', display: { xs: 'none', sm: 'flex' }  }}>

                                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab 
                                                label="PROYECTOS" 
                                                sx={{ fontWeight:'bold' }} {...a11yProps(0)} />

                                            <Tab 
                                                label="CONÓCEME" 
                                                sx={{ fontWeight:'bold' }} {...a11yProps(0)} />

                                            <Tab  
                                                label="CONTÁCTAME" 
                                                sx={{ fontWeight:'bold' }} {...a11yProps(0)} />

                                        </Tabs>

                                </Box>

                                {/* Menu Hamburguesa */}
                                <Box  sx={{ display: { xs: 'flex', sm: 'none' } }} >

                                    <IconButton  size="large"  aria-label="account of current user"  aria-controls="menu-appbar"  aria-haspopup="true"  onClick={handleOpenNavMenu}  color="inherit" >
                                        <MenuIcon sx={{ fontSize:'xx-large' }} color="primary"/>
                                    </IconButton>


                                    <Menu  id="menu-appbar"  anchorEl={anchorElNav}  anchorOrigin={{  vertical: 'bottom',  horizontal: 'left', }}  keepMounted  transformOrigin={{  vertical: 'top',  horizontal: 'left',  }}  open={Boolean(anchorElNav)}  onClose={handleCloseNavMenu}   >
                                        
                                          <Stack className='pagina_mesas_btnGroup' spacing={-2} direction="column" >
                                            
                                                  <Box sx={{ borderBottom: 2, borderColor: 'white', width:'130px' }}>

                                                      <Tabs value={value} orientation='vertical' onChange={handleChange} aria-label="basic tabs example"   >
                                                              <Tab 
                                                                  label="PROYECTOS" 
                                                                  sx={{ fontWeight:'bold' }} {...a11yProps(0)} />

                                                              <Tab 
                                                                  label="CONÓCEME" 
                                                                  sx={{ fontWeight:'bold' }} {...a11yProps(0)} />

                                                              <Tab  
                                                                  label="CONTÁCTAME" 
                                                                  sx={{ fontWeight:'bold' }} {...a11yProps(0)} />
                                                      </Tabs>

                                                  </Box>

                                          </Stack>    

                                    </Menu>   

                                </Box>

                      </Toolbar>

                </AppBar>

          </HideOnScroll>

          <Toolbar  id="back-to-top-anchor" />

          <Container>

                <Box sx={{ width: '100%', minHeight:'100vh', mt:'1rem' }}>
                      
                        <TabPanel value={value} index={0}>

                          <Proyectos></Proyectos>

                        </TabPanel>

                      {/* -------------------------- */}

                        <TabPanel value={value} index={1}>

                          <Conoceme></Conoceme>

                        </TabPanel>
                      
                      {/* -------------------------- */}

                        <TabPanel value={value} index={2}>

                          <Contactame></Contactame>

                        </TabPanel>
                      
                </Box>

          </Container>

          <ScrollTop {...props}>

                <Fab color="secondary" size="small" aria-label="scroll back to top">

                  <KeyboardArrowUpIcon />
                  
                </Fab>
              
          </ScrollTop>

    </React.Fragment>
  );
}