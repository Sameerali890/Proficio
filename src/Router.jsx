import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);
