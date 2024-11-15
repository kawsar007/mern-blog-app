import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      // const sortedPosts = data.posts.sort(
      //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      // );
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div
        className='w-full h-full rounded-md'
        style={{
          backgroundImage: `url("https://i.ibb.co/x1rvpZs/0f-Y6ep3cd1c.png")`,
          backgroundSize: "cover",
        }}>
        {/* header */}
        <header className='flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3 max-w-6xl mx-auto'>
          <div className='px-8 mt-8 lg:mt-0 w-full lg:w-[50%]'>
            <h1 className='text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500] dark:text-black'>
              Welcome to my Blog
            </h1>
            <p className='text-xl mt-2 dark:text-black'>
              Here you&apos;ll find a variety of articles and tutorials on
              topics such as web development, software engineering, and
              programming languages.
            </p>

            <div className='flex items-center flex-wrap gap-[20px] mt-6'>
              <Link
                to='/search'
                className='py-2 px-6 min-w-fit bg-black text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border'>
                View all posts
              </Link>
              <Link
                to='https://github.com/kawsar007/mern-blog-app'
                target='_blank'
                className='py-2 px-6 min-w-fit rounded-full bg-transparent border-black text-black transition-all duration-200 border flex items-center'>
                <FaGithub className='mr-2' /> Github
              </Link>
            </div>
          </div>

          {/* image */}
          <div className='w-full lg:w-[50%]'>
            <img
              src='https://i.ibb.co/kGnQZJ5/free-iphone-12-mini-mockup-scene-1-removebg-preview.png'
              alt='image'
              className='w-full'
            />
          </div>
        </header>
      </div>
      <div>
        <PersonalInfo />
        
      </div>

      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className='text-lg text-teal-500 hover:underline text-center'>
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
