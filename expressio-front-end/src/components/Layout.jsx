import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <NavBar />
        <main className="ml-[200px] p-6 flex w-[700px] h-full min-h-screen min-w-[700px] flex-col border-l border-r border-white border-dotted">
          <Outlet />
        </main>
        <SideBar />
      </div>
    </div>
  );
}
