
import BlogsList from './BlogsLists';
import useFetch from './useFetch';
const Home = () => {

  // useFetch here is a custom hook
  const {data : blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  return (    
      <div className="home">

        {isLoading && <div className=' text-2xl font-medium flex justify-center'>
            Loading....
          </div>}
        {error && <div> {error} </div>}
        {blogs && <h1 className=' text-4xl font-extrabold flex items-center justify-center'> Blogs</h1> }
        {blogs && <BlogsList blogList={blogs} title = ""/>}
      </div>
  );
}

export default Home;