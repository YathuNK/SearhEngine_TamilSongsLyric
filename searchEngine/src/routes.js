
// @mui material components
import Icon from "@mui/material/Icon";
import SearchIcon from "@mui/icons-material/Search";
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
// Pages
import Home from "layouts/pages/home";
import Search from "layouts/pages/search";
import AdvancedSearch from "layouts/pages/advanced-search";

const routes = [
  {
    name: "Home",
    icon: <Icon>dashboard</Icon>,
    route: "/home",
    component: <Home />
  },
  {
    name: "Search",
    icon: <SearchIcon />,
    route: "/search",
    component: <Search />
  },
  {
    name: "Advanced Search",
    icon: <YoutubeSearchedForIcon />,
    route: "/advanced-search",
    component: <AdvancedSearch />
  }
];

export default routes;
