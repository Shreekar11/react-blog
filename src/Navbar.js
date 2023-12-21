import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar p-5 flex items-center max-w-xl m-auto border-b-2">
            <Link to="/" className="logo text-4xl font-semibold">ReactBlog</Link>

            <div className="links ml-auto flex space-x-8 font-medium">
                <Link to="/">Home</Link>    
                <Link to="/create">New Blog</Link>
            </div>
  
        </nav>
    );
}
 
export default Navbar;
