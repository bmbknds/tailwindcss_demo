import { routes } from "@/routes/route";
import { useDarkMode } from "@/hooks/useDarkMode.js";
import { SlideBarItem } from "./SlideBarItem/SideBarItem";
import { Outlet } from "react-router-dom";
import { Switch } from "@headlessui/react";

function SideBar() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div className="flex-row flex bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="w-1/6 h-screen shadow-md  " id="sidenavSecExample">
        <div className="pt-4 pb-2 px-6 ">
          <a href="#!">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  className="rounded-full w-10"
                  alt="Avatar"
                />
              </div>
              <div className="grow ml-3">
                <p className="text-sm font-semibold text-nashtech">
                  Tailwind CSS
                </p>
              </div>
            </div>
          </a>
        </div>
        <nav className="mt-6 ">
          <div>
            {routes.map((item, index) => (
              <SlideBarItem key={index} {...item}></SlideBarItem>
            ))}
          </div>
        </nav>
        <div class="space-x-4 text-center ">
          <span>Light</span>
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`${
              darkMode ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
          >
            <span
              className={`${
                darkMode ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
          <span>Dark</span>
        </div>
      </div>
      <div className="w-5/6 h-screen overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
