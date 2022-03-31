import './App.css';
import { Stack } from '@mui/material';
import Main from './pages/main';
import Footer from './components/footer';
import ThemeProvider from  './theming/theme-provider';

function App() {
  return (
      <ThemeProvider >
      
            <Stack sx={{ minHeight:'100vh' }} >

                    <Main></Main>

                    <Footer></Footer>

            </Stack>

      </ThemeProvider > 
  );
}

export default App;
