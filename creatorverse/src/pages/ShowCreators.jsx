import Card from '../components/Card';
import styles from './ShowCreators.module.css';


function ShowCreators({ creators }) {
  return (
    <div>
      <div className={styles.cardGrid}>
        {creators && creators.length > 0 ? (
          creators.map(creator => (
            <Card
              key={creator.id}            
              id={creator.id}             
              name={creator.name}         
              description={creator.description} 
              imageURL={creator.imageURL} 
              youtube={creator.youtube}   
              twitter={creator.twitter}   
              instagram={creator.instagram} 
            />
          ))
        ) : (
          <article>No creators yet. Go add one!</article>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;