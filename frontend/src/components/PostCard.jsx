/* eslint-disable react/prop-types */
import { MdFavorite, MdFavoriteBorder, MdShare } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { formatedDate } from "../utility/formate-date";

export default function PostCard({
  post,
  handleAddFavourite,
  handleRemoveFavourite,
}) {
  const { currentUser } = useSelector((state) => state.user);

  const handleRedirectToLoggedIn = () => {
    toast.error("Please log in to add this to your favorites.");
  };

  const handleSharePost = () => {
    const postUrl = `${window.location.origin}/post/${post.slug}`;
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          url: postUrl,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard
        .writeText(postUrl)
        .then(() => {
          toast.success("Blog link copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy the link.");
        });
    }
  };

  const renderFavouriteIcon = () => {
    if (!currentUser)
      return (
        <Link to={`/sign-in`}>
          <MdFavoriteBorder
            size={26}
            className='text-gray-600 hover:text-red-500 cursor-pointer'
            onClick={handleRedirectToLoggedIn}
          />
        </Link>
      );

    return post?.isFavourite ? (
      <MdFavorite
        size={26}
        color='red'
        onClick={handleRemoveFavourite}
        className='cursor-pointer'
      />
    ) : (
      <MdFavoriteBorder
        size={26}
        className='text-gray-600 hover:text-red-500 cursor-pointer'
        onClick={handleAddFavourite}
      />
    );
  };

  return (
    <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-[350px] bg-white text-black dark:bg-gray-800 dark:text-white'>
      <img
        alt={post?.title || "Post image"}
        src={post?.image}
        className='h-56 w-full object-cover'
      />

      <div className='px-4 py-2 bg-white dark:bg-gray-900'>
        <div className='flex justify-between items-center'>
          <time className='block text-xs text-gray-500 dark:text-gray-400'>
            {formatedDate(post?.createdAt)}
          </time>
          <span className='block text-xs text-gray-500 dark:text-amber-400 border rounded-md px-2 py-[2px]'>
            {post.category}
          </span>
        </div>

        <Link to={`/post/${post.slug}`}>
          <h3 className='mt-0.5 text-lg text-gray-900 dark:text-white'>
            {post?.title}
          </h3>
        </Link>

        <div
          className='mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-300'
          dangerouslySetInnerHTML={{ __html: post?.content }}
        />

        <div className='flex justify-between items-center mt-4'>
          <Link
            to={`/post/${post.slug}`}
            className='group inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400'>
            Read more
            <span
              aria-hidden='true'
              className='block transition-all group-hover:ms-0.5 rtl:rotate-180'>
              &rarr;
            </span>
          </Link>
          <div className='flex gap-2'>
            <MdShare
              size={26}
              className='text-gray-600 hover:text-blue-500 cursor-pointer'
              onClick={handleSharePost}
            />
            {renderFavouriteIcon()}
          </div>
        </div>
      </div>
    </article>
    // </Link>
  );
}
