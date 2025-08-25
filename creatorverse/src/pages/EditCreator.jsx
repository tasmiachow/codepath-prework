import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '@picocss/pico/css/pico.min.css';

function EditCreator({ creators, onUpdateCreator, onDeleteCreator }) {
  const { creatorId } = useParams();
  const navigate = useNavigate();
  
  const [creator, setCreator] = useState({
    name: '', imageURL: '', description: '', 
    youtube: '', twitter: '', instagram: ''
  });

 
  useEffect(() => {
    const existingCreator = creators.find(c => c.id === parseInt(creatorId));
    if (existingCreator) {
      setCreator(existingCreator);
    }
  }, [creators, creatorId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    await onUpdateCreator(parseInt(creatorId), creator);
    navigate('/');
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      await onDeleteCreator(parseInt(creatorId));
      navigate('/');
    }
  };

  return (
    <article>
      <h2>Edit Creator</h2>
      <form onSubmit={handleUpdate}>
       
        <label>Name</label>
        <input name="name" value={creator.name} onChange={handleChange} required />

        <label>Image URL</label>
        <input name="imageURL" value={creator.imageURL} onChange={handleChange} required />

        <label>Description</label>
        <textarea name="description" value={creator.description} onChange={handleChange} required />
        
        <fieldset>
          <legend>Social Media</legend>
          <div className="grid">
            <label htmlFor="youtube">
              YouTube
              <input
                type="text"
                id="youtube"
                name="youtube"
                placeholder="Handle w/o @"
                value={creator.youtube || ''}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="twitter">
              Twitter
              <input
                type="text"
                id="twitter"
                name="twitter"
                placeholder="Handle w/o @"
                value={creator.twitter || ''}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="instagram">
              Instagram
              <input
                type="text"
                id="instagram"
                name="instagram"
                placeholder="Handle w/o @"
                value={creator.instagram || ''}
                onChange={handleChange}
              />
            </label>
          </div>
        </fieldset>
        
        <div className="grid">
          <button type="submit">Update Creator</button>
          <button type="button" className="secondary" onClick={handleDelete}>Delete Creator</button>
        </div>
      </form>
    </article>
  );
}

export default EditCreator;