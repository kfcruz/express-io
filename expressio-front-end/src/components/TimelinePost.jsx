import placeholderPic from "../assets/placeholder.jpg";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TimelinePost = ({ post }) => {
  return (
    <>
      <div className="flex items-center my-4">
        <img
          className="h-20 w-20 object-fill border-2 rounded-2xl"
          src={placeholderPic}
        />
        <div className="flex flex-col p-4">
          <span>
            {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
          </span>
          <span>
            <span className="font-bold">{post.user}</span> shared a post
          </span>
        </div>
      </div>
      <img
        className="w-full h-100 object-cover border-2 rounded-2xl"
        src={placeholderPic}
      ></img>
      <p className="border-2 rounded-2xl my-4 p-4 text-sm tracking-wider">
        {post.user}: {post.desc}
      </p>
    </>
  );
};

export default TimelinePost;
