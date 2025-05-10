import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="fixed w-50 flex flex-col h-screen">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8 justify-center">
            <div className="font-mono text-lg text-zinc-200 tracking-wider">
              Dashboard
            </div>
          </div>
        </li>
        <li>
          <Link
            to="/home"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 
                    0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 
                    6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="create-post"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Create post
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="search"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 
                    7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 
                    0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 
                    1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 
                    0 0 1 5.25 0Z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Search</span>
          </Link>
        </li>
        <li>
          <Link
            to="messages"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 
                    0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 
                    .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 
                    3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 
                    2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 
                    3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">
              Messages
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="likes"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 
                    2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 
                    9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Likes</span>
          </Link>
        </li>
        <li>
          <Link
            to="profile"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 
                    1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="relative flex flex-row items-center h-11 focus:outline-none 
                hover:bg-zinc-800 text-zinc-200 text-sm font-bold hover:text-zinc-200 
                border-l-4 border-transparent hover:border-lush-pink pr-6 transition duration-200"
          >
            <span className="inline-flex justify-center items-center ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 
                    0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </span>
            <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
