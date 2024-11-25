import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg-img.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import Loading from "../common/Loading";
import PersonalInfo from "../components/PersonalInfo";
import PostCard from "../components/PostCard";
import { usePosts } from "../context/PostContext";

const images = [hero1, hero2, hero3];

export default function Home() {
  const { loading, posts, handleAddFavourite, handleRemoveFavourite } =
    usePosts();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <div>
      <div
        className='w-full h-full rounded-md'
        style={{
          backgroundImage: `url(${bgImg})`,
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

          <div className='w-full lg:w-[50%] overflow-hidden relative hidden lg:block'>
            {/* Carousel Wrapper */}
            <div
              className='flex transition-transform duration-500'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}>
              {/* Render Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className='min-w-full flex justify-center h-full'>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className='w-full h-auto object-cover'
                  />
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>
      <div>
        <PersonalInfo />
      </div>

      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      {loading ? (
        <Loading />
      ) : (
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
          {posts && posts.length > 0 && (
            <div className='flex flex-col gap-6'>
              <h2 className='text-2xl font-semibold text-center'>
                Recent Posts
              </h2>
              <div className='flex flex-wrap gap-4'>
                {posts.slice(0, 6).map((post) => (
                  <PostCard
                    key={post._id}
                    post={post}
                    handleAddFavourite={() => handleAddFavourite(post._id)}
                    handleRemoveFavourite={() =>
                      handleRemoveFavourite(post._id)
                    }
                  />
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
      )}
    </div>
  );
}
