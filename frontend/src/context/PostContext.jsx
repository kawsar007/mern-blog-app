/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

// Create context
const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Frtch all posts
        const postsRes = await fetch("/api/post/getPosts");
        const postsData = await postsRes.json();

        if (currentUser) {
          // Fetch favorites only if the user is logged in
          const favouritesRes = await fetch("/api/favourites");
          const favouritesData = await favouritesRes.json();

          const favouritePosts = favouritesData.map((post) => post._id);

          // Merge posts with favorites data
          const mergedPosts = postsData.posts.map((post) => ({
            ...post,
            isFavourite: favouritePosts.includes(post._id),
          }));

          setPosts(mergedPosts);

          setShowMore(mergedPosts.length === 9);
        } else {
          setPosts(postsData.posts);

          setShowMore(postsData.posts.length === 9);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentUser]);

  const handleAddFavourite = async (postId) => {
    const userId = currentUser?._id;
    try {
      const res = await fetch("/api/favourites/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId }),
      });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, isFavourite: true } : post,
        ),
      );
      console.log("handleAddFavourite", res.data);

      toast.success("Added to favourites");
    } catch (error) {
      console.error("Error adding to favourites:", error);
      console.log(error);
    }
  };

  // Remove from favourites
  const handleRemoveFavourite = async (postId) => {
    const userId = currentUser?._id;
    try {
      await fetch("/api/favourites/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId }),
      });

      toast.success("Remove to favourites");

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, isFavourite: false } : post,
        ),
      );
    } catch (error) {
      console.error("Error removing from favourites:", error);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        showMore,
        setShowMore,
        setPosts,
        handleAddFavourite,
        handleRemoveFavourite,
      }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
