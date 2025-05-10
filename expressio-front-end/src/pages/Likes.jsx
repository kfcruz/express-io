import imagePic1 from "../assets/sample_imagepic1.png";
import imagePic2 from "../assets/sample_imagepic2.png";
import imagePic3 from "../assets/sample_imagepic3.png";
import imagePic4 from "../assets/sample_imagepic4.png";

export default function LikesPage() {
  return (
    <div className="animate-appear">
      <div className="border-t-1 border-b-1 border-dotted items-center">
        <h1 className="font-mono text-zinc-200 text-lg text-center tracking-widest">
          Likes
        </h1>
      </div>
      <div className="grid grid-cols-3 m-4 gap-4">
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer">
          <img
            className="w-50 h-50 object-cover border-2 rounded-2xl cursor-pointer"
            src={imagePic1}
          />
        </div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl">
          <img
            className="w-50 h-50 object-cover border-2 rounded-2xl cursor-pointer"
            src={imagePic2}
          />
        </div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl">
          <img
            className="w-50 h-50 object-cover border-2 rounded-2xl cursor-pointer"
            src={imagePic3}
          />
        </div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl">
          <img
            className="w-50 h-50 object-cover border-2 rounded-2xl cursor-pointer"
            src={imagePic4}
          />
        </div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
        <div className="min-w-1/3 min-h-50  bg-zinc-200 rounded-2xl cursor-pointer"></div>
      </div>
    </div>
  );
}
