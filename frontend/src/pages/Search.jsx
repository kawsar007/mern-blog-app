import { Button, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";
import { usePosts } from "../context/PostContext";

const Search = () => {
  const {
    posts,
    setPosts,
    showMore,
    setShowMore,
    handleAddFavourite,
    handleRemoveFavourite,
  } = usePosts();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });
  console.log("All Posts", posts);

  const [loading, setLoading] = useState(false);

  console.log("Show More", showMore);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }
  }, [location.search, sidebarData]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prev) => ({
      ...prev,
      [id]: value || (id === "sort" ? "desc" : "uncategorized"),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    Object.keys(sidebarData).forEach((key) =>
      urlParams.set(key, sidebarData[key]),
    );
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);

    try {
      setLoading(true);
      const res = await fetch(`/api/post/getPosts?${urlParams.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch more posts");

      const data = await res.json();

      console.log("Show More Data ---> ", data.posts);

      if (data?.posts?.length > 0) {
        const favouritePosts = posts
          .filter((post) => post.isFavourite)
          .map((post) => post._id);

        const mergedPosts = data.posts.map((post) => ({
          ...post,
          isFavourite: favouritePosts.includes(post._id),
        }));

        setPosts((prev) => [...prev, ...mergedPosts]);

        setShowMore(data.posts.length >= 9);
      } else {
        setShowMore(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='border-gray-500 p-4 md:w-[320px] border-b md:border-r md:min-h-screen'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <TextInput
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className='w-full' // Make input full width
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold'>Sort:</label>
            <Select
              className='w-full'
              onChange={handleChange}
              defaultValue={sidebarData.sort}
              id='sort'>
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold'>Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id='category'
              className='w-full'>
              <option value='uncategorized'>Uncategorized</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
              <option value='javascript'>JavaScript</option>
            </Select>
          </div>
          <Button type='submit' outline gradientDuoTone='purpleToPink'>
            Apply Filters
          </Button>
        </form>
      </div>

      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5'>
          Posts results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>No posts found !</p>
          )}
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                handleAddFavourite={() => handleAddFavourite(post._id)}
                handleRemoveFavourite={() => handleRemoveFavourite(post._id)}
              />
            ))}
          {showMore && !loading && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline p-7 w-full'>
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
