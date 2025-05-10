import { useEffect, useState } from "react";
import TimelinePost from "../components/TimelinePost";

export default function SearchPage() {
  const [posts, setPosts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:4000/api/posts");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setPosts(json);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col animate-appear">
      <div className="border-t-1 border-b-1 border-dotted items-center">
        <h1 className="font-mono text-zinc-200 text-lg text-center tracking-widest">
          Search
        </h1>
      </div>
      <input
        className="mt-6 mb-6 border-b border-zinc-200 font-mono text-zinc-200 text-lg text-center 
          tracking-widest outline-none"
        type="text"
        placeholder="Begin searching for posts..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <div>
        {posts &&
          posts
            .filter((post) => {
              if (searchTerm == "") {
                return posts;
              } else if (
                post.desc.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return posts;
              }
            })
            .map((post) => <TimelinePost key={post._id} post={post} />)}
      </div>
    </div>
  );
}
