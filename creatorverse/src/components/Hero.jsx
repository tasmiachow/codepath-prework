import { Link } from 'react-router-dom';
import styles from "./Hero.module.css";


const HERO_IMAGE = 'https://i.ytimg.com/vi/_GuOjXYl5ew/maxresdefault.jpg';


function Hero(){
    return(
       <div className={styles.hero} style={{ backgroundImage: `url(${HERO_IMAGE}`}}>
        <div className={styles.heroContent}>
            <h1>Creatorverse</h1>
            <p>Bunch of cool people.</p>
            <div className={styles.heroActions}>
            <Link to="/" role="button">View All Creators</Link>
            <Link to="/add" role="button" className="contrast">Add a Creator</Link>
            </div>
        </div>
    </div>
    );
}

export default Hero;