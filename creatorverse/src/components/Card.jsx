import IconButton from '@mui/material/IconButton';
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./Card.module.css";



function Card(props){
    
    return(
        <div className={styles.cardContainer}>
            <h1>{props.name}</h1>
            <div className={styles.socialIcons}>
                <IconButton>
                    <YouTubeIcon sx={{color: "rgba(255,255,255)"}}/>
                </IconButton>
                <IconButton>
                    <TwitterIcon sx={{color: "rgba(255,255,255)"}}/>
                </IconButton>
                <IconButton>
                    <InstagramIcon sx={{color: "rgba(255,255,255)"}}/>
                </IconButton>

            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;