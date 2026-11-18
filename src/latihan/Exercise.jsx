import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

const Exercise = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data.slice(0, 9));;
      } catch (err) {
        console.error("Gagal mengambil data post:", err);
        setError(err.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Post Cards
      </h1>

      {error && <p className="text-center text-red-500 mb-4">{error}</p>}

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default Exercise;