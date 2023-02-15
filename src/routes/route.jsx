import { createBrowserRouter } from "react-router-dom";
import SideBar from "@/components/SideBar";

import Color from "@/pages/colors";
import Form from "@/pages/form";
import Customization from "@/pages/customization";

export function Root() {
  return (
    <>
      <SideBar></SideBar>
    </>
  );
}

export const routes = [
  {
    name: "Colors",
    path: "/colors",
    element: <Color />,
  },
  {
    name: "Form",
    path: "/form",
    element: <Form />,
  },
  {
    name: "Customization",
    path: "/customization",
    element: <Customization />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: routes,
  },
]);
