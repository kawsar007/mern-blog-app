import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../common/Loading";
import PostCard from "../../components/PostCard";
import { usePosts } from "../../context/PostContext";

const Favourits = () => {
  const { loading, handleAddFavourite, handleRemoveFavourite, getFavourites } =
    usePosts();

  const favouritesPost = getFavourites();

  return (
    <>
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-2xl font-semibold text-center border-b-5 border-red-500'>
            My Favourites List
          </h2>
          {loading ? (
            <div className='flex justify-center items-center h-full w-full'>
              <Loading />
            </div>
          ) : (
            <>
              <div className='flex flex-wrap gap-4'>
                {favouritesPost.slice(0, 6).map((post) => (
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Favourits;

// import React from "react";
// import { Link } from "react-router-dom";
// import Loading from "../../common/Loading";
// import PostCard from "../../components/PostCard";
// import { usePosts } from "../../context/PostContext";

// const Favourits = () => {
//   const {
//     loading,
//     handleAddFavourite,
//     handleRemoveFavourite,
//     getFavourites,
//   } = usePosts();

//   const favouritesPost = getFavourites();

//   return (
//     <>
//       {loading ? (
//         <div className="flex justify-center items-center h-full w-full">
//         <Loading />
//         </div>
//       ) : (
//         <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
//           {favouritesPost && favouritesPost.length > 0 && (
//             <div className='flex flex-col gap-6'>
//               <h2 className='text-2xl font-semibold text-center'>
//                 My Favourites Post
//               </h2>
//               <div className='flex flex-wrap gap-4'>
//                 {favouritesPost.slice(0, 6).map((post) => (
//                   <PostCard
//                     key={post._id}
//                     post={post}
//                     handleAddFavourite={() => handleAddFavourite(post._id)}
//                     handleRemoveFavourite={() =>
//                       handleRemoveFavourite(post._id)
//                     }
//                   />
//                 ))}
//               </div>
//               <Link
//                 to={"/search"}
//                 className='text-lg text-teal-500 hover:underline text-center'>
//                 View all posts
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default Favourits;
