import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../common/Loading";

const RandomBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [posts.length]);

  return (
    <div className='w-full relative'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Link to={`/post/${posts[currentIndex]?.slug}`}>
            <img
              src={posts[currentIndex]?.image}
              alt='image'
              className='w-full h-[220px] object-cover rounded-xl'
            />

            <div className='absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl'>
              <span className='text-[0.8rem] py-1 px-3 bg-blue-500 rounded-full text-white'>
                {posts[currentIndex]?.category}
              </span>
              <h1 className='text-[1.8rem] text-white font-bold leading-[34px] mt-4'>
                {posts[currentIndex]?.title}
              </h1>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default RandomBlog;
