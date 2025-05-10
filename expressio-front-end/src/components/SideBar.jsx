import placeholderPic from "../assets/placeholder.jpg";

export default function NavBar() {
  return (
    <div className="fixed ml-[900px] w-50 flex flex-col h-screen">
      <div className="flex flex-col px-5 py-4 items-center">
        <div className="h-8 font-mono text-lg text-zinc-200 tracking-wider">
          Signed in as:
        </div>
        <div className="h-8 font-mono text-lg text-zinc-200 tracking-wider">
          User 404
        </div>
        <img
          className="h-20 w-20 object-fill border-2 rounded-2xl"
          src={placeholderPic}
        />
      </div>
    </div>
  );
}
