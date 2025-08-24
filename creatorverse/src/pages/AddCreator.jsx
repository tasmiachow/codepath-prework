import '@picocss/pico/css/pico.min.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddCreator() {
    const navigate = useNavigate();

    const [creator, setCreator] = useState({
        name: '',
        profile: '',
        description: '',
        youtube: '',
        twitter: '',
        instagram: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator(prevCreator => ({
            ...prevCreator,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(creator, null, 2));
        navigate('/');
    };

    return (
        <article>
            <h2>Add Creator</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        id="name"
                        name="name" 
                        placeholder="Tas Chow"
                        value={creator.name}
                        onChange={handleChange}
                        required
                    />
                </label>


                <label htmlFor="image">
                    Image URL
                    <input
                        type="url"
                        id="image"
                        name="profile" 
                        placeholder="https://..."
                        value={creator.profile}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        name="description" 
                        placeholder="Write a short summary"
                        value={creator.description}
                        onChange={handleChange}
                        required
                    />
                </label>

                
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
                                value={creator.youtube}
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
                                value={creator.twitter}
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
                                value={creator.instagram}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </fieldset>

                <button type="submit">Submit</button>
            </form>
        </article>
    );
}

export default AddCreator;