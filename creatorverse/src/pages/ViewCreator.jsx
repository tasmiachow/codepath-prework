import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '@picocss/pico/css/pico.min.css';

function ViewCreator({ creators } ){
    const { creatorId } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const foundCreator = creators.find(c => c.id === parseInt(creatorId));
        setCreator(foundCreator);
    }, [creators, creatorId]);

   
    if (!creator) {
        return <article><h2>Creator not found!</h2></article>;
    }


     return (
        <div>
        <article>
            
            <img 
                src={creator.imageURL} 
                alt={`Image of ${creator.name}`} 
                style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 'var(--border-radius)' }} 
            />

            
            <h1>{creator.name}</h1>
            <p>{creator.description}</p>
            <div>
                 {creator.youtube && (
                    <IconButton
                    component="a"
                    href={`https://www.youtube.com/@${creator.youtube}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="youtube"
                    >
                    <YouTubeIcon sx={{ color: "white", backgroundColor: "red", borderRadius: '15%', padding: '5%' }} />
                    </IconButton>
                )}
                {creator.twitter && (
                        <IconButton
                        component="a"
                        href={`https://x.com/${creator.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="twitter"
                        >
                        <TwitterIcon sx={{ color: "white", backgroundColor: "#1DA1F2", borderRadius: '15%', padding: '5%' }} />
                        </IconButton>
                    )}
                {creator.instagram && (
                    <IconButton
                    component="a"
                    href={`https://www.instagram.com/${creator.instagram}`} // <-- Corrected
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                    >
                    <InstagramIcon sx={{ color: "white", borderRadius: '15%', padding: '5%', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)' }} />
                    </IconButton>
                )}
            </div>
        </article>

            <div className="grid" style={{ marginTop: '1rem' }}>
                <Link to={`/edit/${creatorId}`} role="button">
                    Edit Creator
                </Link>
                <Link to="/" role="button" className="secondary">
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default ViewCreator;