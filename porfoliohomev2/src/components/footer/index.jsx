import './style.css';
import { Stack } from '@mui/material';
import pdf from '../../components/documentos/curriculumVitae.pdf';
import Button from '@mui/material/Button';

export default function Footer(){

    return(
        <Stack sx={{ justifyContent:'center'}}>
            <div className='footer_text'>

                <div>Nilton Medina</div> 

                <b> WEB FULL STACK DEVELOPER 2022 </b>

                <a className='porfolio_link_download' href={pdf} target="_blank" rel="noopener noreferrer" download="CurriculumVitae.pdf">

                        <div>👉</div>

                        <Button variant="contained" sx={{ height:'2rem', color:'white', fontWeight:'bold', backgroundColor:'orange' }} >          
                                DESCARGA MI CV                 
                        </Button>

                        <div>👈</div>

                </a> 
                
            </div>
        </Stack>
    )

}