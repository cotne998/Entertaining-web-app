import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import Bookmark from "./pages/BookmarkPage";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/Main/Home",
        element: <Home />,
      },
      {
        path: "/Main/Movies",
        element: <Movies />,
      },
      {
        path: "/Main/TV-Series",
        element: <TVSeries />,
      },
      {
        path: "/Main/Bookmark",
        element: <Bookmark />,
      },
      {
        path: "/Main/Search",
        element: <Search />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
