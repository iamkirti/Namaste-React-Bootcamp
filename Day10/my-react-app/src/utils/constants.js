import { lazy, Suspense } from "react";

import ErrorComponent from "../component/ErrorComponent";
//import AboutUs from "../component/AboutUs"; static import declaration
import Avenger from "../component/Avenger";
import ProfileComponent from "../component/ProfileComponent";
//import BodyComponent from "../component/BodyComponent";
import AppLayout from "../component/AppLayout";
import { createBrowserRouter } from "react-router-dom";
export const TITLE = "Avengers";
export const IMAGE = "https://cdn.wallpapersafari.com/36/94/SK2sZv.jpg";
export const ENDPOINT = "https://api.github.com/users/";

const AboutUs = lazy(() => import("../component/AboutUs"));
const BodyComponent = lazy(() => import("../component/BodyComponent"));

const routesConfig = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/avenger/:login",
        element: <Avenger />,
      },
      {
        path: "/search",
        element: (
          <Suspense>
            <BodyComponent />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <ProfileComponent name={"Kirti Sahai in props"} />,
          },
        ],
      },
    ],
  },
];
export const appRouter = createBrowserRouter(routesConfig);
