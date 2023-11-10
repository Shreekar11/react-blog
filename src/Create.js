import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blogs = { title, author, body };

        setIsLoading(true);
        
        // now need to provide a POST request to JSON file to accept the data using fetch
        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : {"Content-Type" : "application/json" },
            body : JSON.stringify(blogs)
        }).then(() => {
            setIsLoading(false);
            history.push('/react-blog');
        })
    }

    return (
        <div className="create">
            <h2 className=" text-5xl font-bold ">New Blog Page</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input 
                    type="text"
                    required
                    value = { title }
                    onChange = {(e) => {
                        setTitle(e.target.value)
                    }}
                 />

                <label>Blog body:</label>
                <textarea
                    required
                    value = { body }
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                ></textarea>

                <label>Blog Author : </label> 
                <input 
                    type="text"
                    required
                    value={ author }
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                />

                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button>Adding Blog</button>} 
            </form>
        </div>
    );
}

export default Create;