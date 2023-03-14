import { routes } from "@/routes/route";
import { useDarkMode } from "@/hooks/useDarkMode.js";
import { useTheme, THEMES } from "@/hooks/useTheme.js";
import { SlideBarItem } from "./SlideBarItem/SideBarItem";
import { Outlet } from "react-router-dom";
import { Listbox } from "@headlessui/react";

function SideBar() {
  // const [setTheme, setDarkMode] = useDarkMode();
  const [theme, setTheme] = useTheme();
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
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                data-te-select-init
              >
                {THEMES.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6 h-screen overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default SideBar;
