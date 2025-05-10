import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import MessagesPage from "./pages/Messages";
import LikesPage from "./pages/Likes";
import ProfilePage from "./pages/Profile";
import CreatePostPage from "./pages/CreatePost";
import Layout from "./components/Layout";

const routes = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "messages",
        element: <MessagesPage />,
      },
      {
        path: "likes",
        element: <LikesPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "create-post",
        element: <CreatePostPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
