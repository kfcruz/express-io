import placeholderPic from "../assets/placeholder.jpg";

export default function ProfilePage() {
  return (
    <div className="animate-appear">
      <div className="border-t-1 border-b-1 border-dotted items-center">
        <h1 className="font-mono text-zinc-200 text-lg text-center tracking-widest">
          Profile
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center min-w-1/2 p-4">
            <img
              className="h-50 w-50 object-fill border-2 rounded-2xl"
              src={placeholderPic}
            />
          </div>
          <p className="flex p-4 items-center justify-center gap-4 text-sm tracking-wider">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="flex items-center justify-between p-4">
          <button className="bg-zinc-800 text-zinc-200 min-w-1/4 text-center font-semibold rounded-2xl hover:bg-zinc-700 cursor-pointer">
            Posts
          </button>
          <button className="bg-zinc-800 text-zinc-200 min-w-1/4 text-center font-semibold rounded-2xl hover:bg-zinc-700 cursor-pointer">
            Likes
          </button>
          <button className="bg-zinc-800 text-zinc-200 min-w-1/4 text-center font-semibold rounded-2xl hover:bg-zinc-700 cursor-pointer">
            Followers
          </button>
          <button className="bg-zinc-800 text-zinc-200 min-w-1/4 text-center font-semibold rounded-2xl hover:bg-zinc-700 cursor-pointer">
            Following
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 m-4 gap-4">
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer">
          <img
            className="w-50 h-50 object-cover border-2 rounded-2xl"
            src={placeholderPic}
          />
        </div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer">
          <img
            className="w-50 h-50 object-cover border-2 rounded-2xl"
            src={placeholderPic}
          />
        </div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
      </div>
    </div>
  );
}
