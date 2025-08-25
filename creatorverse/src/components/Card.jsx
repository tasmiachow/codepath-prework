import IconButton from '@mui/material/IconButton';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from "./Card.module.css";
import { Link } from 'react-router-dom';


function Card({ id, name, description, imageURL, youtube, twitter, instagram }) {
    return (
        
        <div 
            className={styles.cardBox} 
            style={{ backgroundImage: `url(${imageURL})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }}
        >
            <div className={styles.toolButtons}>
                <IconButton component={Link} to={`/view/${id}`} aria-label="view creator">
                    <InfoOutlinedIcon sx={{ color: "rgba(255,255,255)" }} />
                </IconButton>
                <IconButton component={Link} to={`/edit/${id}`} aria-label="edit creator">
                    <EditOutlinedIcon sx={{ color: "rgba(255,255,255)" }} />
                </IconButton>
            </div>

            <div className={styles.cardContainer}>
                <h1>{name}</h1>
                <div className={styles.socialIcons}>
                    
                    {youtube && (
                        <IconButton component="a" href={`https://www.youtube.com/@${youtube}`} target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon sx={{ color: "white", backgroundColor: "red", borderRadius: '15%', padding: '5%' }} />
                        </IconButton>
                    )}
                    {twitter && (
                        <IconButton component="a" href={`https://x.com/${twitter}`} target="_blank" rel="noopener noreferrer">
                            <TwitterIcon sx={{ color: "white", backgroundColor: "#1DA1F2", borderRadius: '15%', padding: '5%' }} />
                        </IconButton>
                    )}
                    {instagram && (
                        <IconButton component="a" href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon id={styles.instagram} sx={{ color: "white", borderRadius: '15%', padding: '5%' }} />
                        </IconButton>
                    )}
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;