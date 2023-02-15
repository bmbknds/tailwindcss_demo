import { NavLink } from "react-router-dom";
import "./style.css";

export function SlideBarItem({ name, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `side-bar-item ${
          isActive
            ? "bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
            : ""
        }`
      }
    >
      <span className="text-left">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 2048 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
        </svg>
      </span>
      <span className="mx-4 text-sm font-normal">{name}</span>
    </NavLink>
  );
}
