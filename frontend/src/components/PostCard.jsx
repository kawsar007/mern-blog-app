/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatedDate } from "../utility/formate-date";
export default function PostCard({ post }) {
  return (
    <article className='overflow-hidden rounded-lg shadow transition hover:shadow-lg w-full sm:w-[350px]    bg-white text-black dark:bg-gray-800 dark:text-white'>
      <img alt='' src={post?.image} className='h-56 w-full object-cover' />

      <div className='px-4 py-2 bg-white dark:bg-gray-900'>
        <div className="flex justify-between items-center">
        <time
          className='block text-xs 
            dark:text-gray-400 text-gray-500'>
          {formatedDate(post?.createdAt)}
        </time>
        <span className='block text-xs 
            dark:text-amber-400 text-gray-500 border rounded-md px-2 py-[2px]'>{post.category}</span>
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
      </div>
    </article>
  );
}

// import { Link } from 'react-router-dom';

// export default function PostCard({ post }) {
//   return (
//     <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all'>
//       <Link to={`/post/${post.slug}`}>
//         <img
//           src={post.image}
//           alt='post cover'
//           className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
//         />
//       </Link>
//       <div className='p-3 flex flex-col gap-2'>
//         <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
//         <span className='italic text-sm'>{post.category}</span>
//         <Link
//           to={`/post/${post.slug}`}
//           className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
//         >
//           Read article
//         </Link>
//       </div>
//     </div>
//   );
// }
