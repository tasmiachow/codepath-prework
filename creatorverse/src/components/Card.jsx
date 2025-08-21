import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./Card.module.css";
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';


function Card(props){
    
    return(
         <div className={styles.cardBox}>
         <div className={styles.toolButtons}>
                    <IconButton component={Link} to="/view" aria-label="viewcreator">
                        <InfoOutlinedIcon  sx={{color: "rgba(255,255,255)"}}/>
                    </IconButton>
                    <IconButton component={Link} to="/edit" aria-label="editcreator"> 
                        <EditOutlinedIcon sx={{color: "rgba(255,255,255)"}}/>
                    </IconButton>
            
            </div>
        <div className={styles.cardContainer}>
            <h1>{props.name}</h1>
            <div className={styles.socialIcons}>
                <IconButton>
                    <YouTubeIcon sx={{
                        color: "rgba(255,255,255)", 
                        backgroundColor:"red", 
                        borderRadius:'15%', 
                        padding:'5%'}}/>
                </IconButton>
                <IconButton>
                    <TwitterIcon sx={{
                        color: "rgba(255,255,255)", 
                        backgroundColor:"#1DA1F2", 
                        borderRadius:'15%', 
                        padding:'5%'}}/>
                </IconButton>
                <IconButton>
                    <InstagramIcon sx={{color: "rgba(255,255,255)", borderRadius:'15%',  padding:'5%'}} id={styles.instagram}/>
                </IconButton>

            </div>
            <p>{props.description}</p>
        </div>
        </div>
    )
}

export default Card;