/* eslint-disable react/prop-types */
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatedDate } from "../utility/formate-date";
export default function PostCard({
  post,
  handleAddFavourite,
  handleRemoveFavourite,
}) {
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  return (
    <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-[350px]    bg-white text-black dark:bg-gray-800 dark:text-white'>
      <img alt='' src={post?.image} className='h-56 w-full object-cover' />

      <div className='px-4 py-2 bg-white dark:bg-gray-900'>
        <div className='flex justify-between items-center'>
          <time
            className='block text-xs 
            dark:text-gray-400 text-gray-500'>
            {formatedDate(post?.createdAt)}
          </time>
          <span
            className='block text-xs 
            dark:text-amber-400 text-gray-500 border rounded-md px-2 py-[2px]'>
            {post.category}
          </span>
        </div>

        <Link to={`/post/${post.slug}`}>
          <h3
            className='mt-0.5 text-lg text-gray-900
              dark:text-white'>
            {post?.title}
          </h3>
        </Link>

        <div
          className='mt-2 line-clamp-3 text-sm/relaxed
            dark:text-gray-300 text-gray-500'
          dangerouslySetInnerHTML={{ __html: post?.content }} // Updated line
        />

        <div className='flex justify-between items-center'>
          <Link
            to={`/post/${post.slug}`}
            className='group mt-4 inline-flex items-center gap-1 text-sm font-medium 
            dark:text-blue-400 text-blue-600'>
            Read more
            <span
              aria-hidden='true'
              className='block transition-all group-hover:ms-0.5 rtl:rotate-180'>
              &rarr;
            </span>
          </Link>

          {currentUser && (
            <div className='flex items-center'>
              {post?.isFavourite ? (
                <MdFavorite
                  size={26}
                  color='green'
                  onClick={handleRemoveFavourite}
                  className='cursor-pointer'
                />
              ) : (
                <MdFavoriteBorder
                  size={26}
                  className='text-gray-600 hover:text-red-500 cursor-pointer'
                  onClick={handleAddFavourite}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
