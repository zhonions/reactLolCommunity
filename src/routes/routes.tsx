import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/home";
import AboutPage from "../pages/About/about";
import News from "../pages/News/news";
import Toornament from "../pages/Toornament/toornament";
import Community from "../pages/Community/community";
import ToornamentTeams from "../pages/ToornamentTeams/toornamentTeams";
import ToornamentPlayer from "../pages/ToornamentPlayer/toornamentPlayer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/toornament",
    element: <Toornament />,
  },
  {
    path: "/community",
    element: <Community />,
    children: [
      {
        path: "/toornamentPlayer",
        element: <ToornamentPlayer />,
      },
      {
        path: "/toornamentTeams",
        element: <ToornamentTeams />,
      },
    ],
  },
]);
