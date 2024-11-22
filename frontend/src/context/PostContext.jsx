/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Create context
const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [showMore, setShowMore] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, favouritesRes] = await Promise.all([
          fetch("/api/post/getPosts"),
          fetch("/api/favourites"),
        ]);

        const postsData = await postsRes.json();
        const favouritesData = await favouritesRes.json();

        const favouritePosts = favouritesData.map((post) => post._id);
        const mergedPosts = postsData.posts.map((post) => ({
          ...post,
          isFavourite: favouritePosts.includes(post._id),
        }));

        setPosts(mergedPosts);

        if (mergedPosts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddFavourite = async (postId) => {
    const userId = currentUser?._id;
    try {
      await fetch("/api/favourites/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId, userId }),
      });

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId ? { ...post, isFavourite: true } : post,
        ),
      );
    } catch (error) {
      console.error("Error adding to favourites:", error);
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
