import { useState } from "react";

export default function CreatePostPage() {
  const user = "User 404";
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { user, desc };

    const response = await fetch("http://localhost:4000/api/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setDesc("");
      setError(null);
      setMessage("Post submitted!");
      console.log("New post added");
    }
  };

  return (
    <form
      className="h-full flex flex-col justify-center items-center animate-appear mt-50"
      onSubmit={handleSubmit}
    >
      <div className="p-4 w-2/3">
        <label className="block mb-2 p-4 text-lg font-mono text-white text-center tracking-widest">
          What's on your mind?
        </label>
        <textarea
          className="peer p-4 h-55 w-full resize-none rounded-[7px] border border-white"
          maxLength={"301"}
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
      </div>
      <div className="flex gap-4 p-4 w-2/3 justify-between">
        <label
          className="flex w-50 h-15 bg-white rounded-lg hover:bg-zinc-400"
          htmlFor="file-upload"
          type="button"
        >
          <p
            className="flex h-full w-full items-center justify-center 
              text-black font-mono font-bold tracking-wide"
          >
            Upload file
          </p>
        </label>
        <input
          type="file"
          label="Image"
          name="img"
          id="file-upload"
          className="hidden"
          accept=".jpg, .jpeg, .png"
        />
        <button
          className="w-50 h-15 bg-white text-black font-mono font-bold tracking-wide 
            rounded-lg hover:bg-zinc-400"
          type="submit"
        >
          Post
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {message && (
        <div className="text-green-500 animate-fadeOut">{message}</div>
      )}
    </form>
  );
}
