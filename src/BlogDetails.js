import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const history = useHistory();
    const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method : 'DELETE',
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <div>Loading...</div>}
            { error && <div> { error } </div>}
            { blogs && 
                <article>
                    <h2 className=" text-3xl font-bold flex items-center">{ blogs.title }</h2>
                    <p className=" text-xl font-semibold "> Author : { blogs.author }</p>
                    <p>{ blogs.body }</p>
                    <h3 className=" text-2xl font-semibold mb-3 mt-3">{ blogs.newTitle }</h3>
                    <p>{ blogs.subBody }</p>

                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            }
        </div>
    );
}

export default BlogDetails;
