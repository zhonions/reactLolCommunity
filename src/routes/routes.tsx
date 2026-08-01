import { createBrowserRouter } from "react-router-dom";
import News from "../pages/News/news";
import Tournament from "../pages/Tournament/tournament";
import Community from "../pages/Community/community";
import About from "../pages/About/about";
import Home from "../pages/Home/home";
import TournamentPlayer from "../pages/Tournament/TournamentPlayer/tournamentPlayer";
import TournamentTeams from "../pages/Tournament/TournamentTeams/tournamentTeams";
import CommunityPlayer from "../pages/Community/CommunityPlayer/communityPlayer";
import CommunityTeams from "../pages/Community/CommunityTeams/communityTeams";
import Account from "../pages/Account/account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/tournament",
    element: <Tournament />,
  },
  {
    path: "/tournament/tournament-player",
    element: <TournamentPlayer />,
  },
  {
    path: "/tournament/tournament-teams",
    element: <TournamentTeams />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/community/community-player",
    element: <CommunityPlayer />,
  },
  {
    path: "/community/community-teams",
    element: <CommunityTeams />,
  },
  {
    path: "/account",
    element: <Account />,
  },
], {
  basename: import.meta.env.BASE_URL,
});
