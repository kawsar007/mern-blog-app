import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import { usePosts } from "../context/PostContext";

const PostPage = () => {
  const { postSlug } = useParams();
  const { posts, handleAddFavourite, handleRemoveFavourite } = usePosts();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  // Fetch individual post by slug
  useEffect(() => {
    const fetchPost = () => {
      try {
        setLoading(true);
        const fetchedPost = posts.find((p) => p.slug === postSlug); // Find the post from global posts
        if (!fetchedPost) {
          setError(true);
        } else {
          setPost(fetchedPost);
          setError(false);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postSlug, posts]);

  // Get recent posts from global state
  useEffect(() => {
    const fetchRecentPosts = () => {
      const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      ); // Sort posts by createdAt descending
      setRecentPosts(sortedPosts.slice(0, 3)); // Get top 3 recent posts
    };

    fetchRecentPosts();
  }, [posts]);

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Spinner size='xl' />
      </div>
    );

  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post?.category}`}
        className='self-center mt-5'>
        <Button color='gray' pill size='xs'>
          {post && post.category}
        </Button>
      </Link>
      <img
        src={post && post.image}
        alt={post && post.title}
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className='p-3 max-w-2xl mx-auto w-full post-content'
        dangerouslySetInnerHTML={{ __html: post && post.content }}></div>
      {/* <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div> */}
      <CommentSection postId={post?._id} />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'>Recent Article</h1>
        <div className='flex flex-wrap gap-5 mt-5'>
          {recentPosts &&
            recentPosts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                handleAddFavourite={() => handleAddFavourite(post._id)}
                handleRemoveFavourite={() => handleRemoveFavourite(post._id)}
              />
            ))}
        </div>
      </div>
      <div className='max-w-full mx-auto w-full'>
        <CallToAction />
      </div>
    </main>
  );
};

export default PostPage;
