import profilePic1 from "../assets/sample_profilepic1.png";
import profilePic4 from "../assets/sample_profilepic4.png";
import placeholderPic from "../assets/placeholder.jpg";

export default function MessagesPage() {
  return (
    <div className="animate-appear">
      <div className="border-t-1 border-b-1 border-dotted items-center">
        <h1 className="font-mono text-zinc-200 text-lg text-center tracking-widest">
          Messages
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={profilePic1}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">Robot Person</span>
            <span>
              <span>where's my money</span>
            </span>
          </div>
        </div>
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={profilePic4}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">John Doe</span>
            <span>
              <span>hey how's it going, did you get my messages earlier?</span>
            </span>
          </div>
        </div>
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={placeholderPic}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">User 8</span>
            <span>
              <span>Message here</span>
            </span>
          </div>
        </div>
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={placeholderPic}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">User 5</span>
            <span>
              <span>Message here</span>
            </span>
          </div>
        </div>
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={placeholderPic}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">User 3</span>
            <span>
              <span>Message here</span>
            </span>
          </div>
        </div>
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={placeholderPic}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">User 2</span>
            <span>
              <span>Message here</span>
            </span>
          </div>
        </div>
        <div className="flex items-center my-4 p-4 border-2 rounded-2xl cursor-pointer">
          <img
            className="h-20 w-20 object-fill border-2 rounded-2xl"
            src={placeholderPic}
          />
          <div className="flex flex-col p-4">
            <span className="font-bold">User 1</span>
            <span>
              <span>Message here</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
