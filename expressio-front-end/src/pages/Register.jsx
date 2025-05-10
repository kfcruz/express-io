import { Link } from "react-router-dom";
import banner from "../assets/beachsunset.png";

export default function RegisterPage() {
  return (
    <div className="bg-beach">
      <div className="min-h-screen flex items-center backdrop-blur-3xl">
        <div className="max-w-md mx-auto mt-4">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#171616] animate-appear border-2">
            <img
              className="w-full"
              src={banner}
              alt="Sunset in the mountains."
            />
            <div className="px-6 py-4 border-t-1 border-zinc-200">
              <div
                className="font-mono text-zinc-200 drop-shadow text-lg mb-2 text-center tracking-wider
                cursor-default"
              >
                Account registration
              </div>
              <div className="mt-4">
                <label className="block text-zinc-200 text-sm font-bold mb-2 text-left">
                  Email Address
                </label>
                <input
                  className="bg-zinc-200 text-zinc-800 focus:outline-none focus:shadow-outline border 
                                    border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="email"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-zinc-200 text-sm font-bold mb-2">
                    Password
                  </label>
                </div>
                <input
                  className="bg-zinc-200 text-zinc-800 focus:outline-none focus:shadow-outline border 
                                    border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-zinc-200 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                </div>
                <input
                  className="bg-zinc-200 text-zinc-800 focus:outline-none focus:shadow-outline border 
                                    border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                />
              </div>
              <div className="mt-8">
                <Link to="/">
                  <div className="bg-zinc-800 text-white text-center font-bold py-2 px-4 w-full rounded  hover:bg-zinc-700">
                    Create account
                  </div>
                </Link>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Link
                  to="/"
                  className="text-xs text-center text-zinc-200 hover:text-lush-pink"
                >
                  Already have an account? Login here!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
