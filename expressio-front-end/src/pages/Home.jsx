import { useEffect, useState } from "react";
import TimelinePost from "../components/TimelinePost";
import profilePic1 from "../assets/sample_profilepic1.png";
import profilePic2 from "../assets/sample_profilepic2.png";
import profilePic3 from "../assets/sample_profilepic3.png";
import profilePic4 from "../assets/sample_profilepic4.png";
import imagePic1 from "../assets/sample_imagepic1.png";
import imagePic2 from "../assets/sample_imagepic2.png";
import imagePic3 from "../assets/sample_imagepic3.png";
import imagePic4 from "../assets/sample_imagepic4.png";

const HomePage = () => {
  const [posts, setPosts] = useState(null);

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
      <div className="border-t-1 border-b-1 border-dotted">
        <h1 className="font-mono text-zinc-200 text-lg text-center tracking-widest">
          Home
        </h1>
      </div>
      <div>
        {posts &&
          posts.map((post) => <TimelinePost key={post._id} post={post} />)}
      </div>
      <div>
        <div className="flex items-center my-4">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={profilePic1}
          />
          <div className="flex flex-col p-4">
            <span>about 1 hour ago</span>
            <span>
              <span className="font-bold">Robot Person</span> shared a post
            </span>
          </div>
        </div>
        <img
          className="w-full h-100 object-cover border-2 rounded-2xl"
          src={imagePic1}
        ></img>
        <p className="border-2 rounded-2xl my-4 p-4 text-sm tracking-wider">
          Robot Person: its kinda scary around here
        </p>
      </div>
      <div>
        <div className="flex items-center my-4">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={profilePic2}
          />
          <div className="flex flex-col p-4">
            <span>about 4 hours ago</span>
            <span>
              <span className="font-bold">Porter Robinson</span> shared a post
            </span>
          </div>
        </div>
        <img
          className="w-full h-100 object-cover border-2 rounded-2xl"
          src={imagePic2}
        ></img>
        <p className="border-2 rounded-2xl my-4 p-4 text-sm tracking-wider">
          Porter Robinson: Check out my album!!
        </p>
      </div>
      <div>
        <div className="flex items-center my-4">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={profilePic3}
          />
          <div className="flex flex-col p-4">
            <span>about 7 hours ago</span>
            <span>
              <span className="font-bold">Hourglass Dog</span> shared a post
            </span>
          </div>
        </div>
        <img
          className="w-full h-100 object-cover border-2 rounded-2xl"
          src={imagePic3}
        ></img>
        <p className="border-2 rounded-2xl my-4 p-4 text-sm tracking-wider">
          Hourglass Dog: where am i
        </p>
      </div>
      <div>
        <div className="flex items-center my-4">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={profilePic4}
          />
          <div className="flex flex-col p-4">
            <span>about 10 hours ago</span>
            <span>
              <span className="font-bold">John Doe</span> shared a post
            </span>
          </div>
        </div>
        <img
          className="w-full h-100 object-cover border-2 rounded-2xl"
          src={imagePic4}
        ></img>
        <p className="border-2 rounded-2xl my-4 p-4 text-sm tracking-wider">
          John Doe: Sightseeing
        </p>
      </div>
    </div>
  );
};

export default HomePage;
