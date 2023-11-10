import { Link } from "react-router-dom";

const BlogsList = ({blogList, title}) => {

    return ( 
        <div className="blogs-list pb-5">
            <h1 className="text-3xl font-semibold text-black-400">{ title }</h1>
            {blogList.map(blog => (
                <div className="blog-preview pt-3 pr-4 mt-5 mr-0" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2 className=" text-3xl font-semibold text-red-400">{ blog.title }</h2>
                        <p className=" font-semibold">Written by : { blog.author }</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogsList;