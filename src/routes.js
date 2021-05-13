import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import Welcome from "views/Welcome/Welcome.js";
import Engineer from "views/Engineer/Engineer.js";
import Instructor from "views/Instructor/Instructor.js";
import TechArt from "views/TechArt/TechArt.js";
import Recordings from "views/Recordings/Recordings.js";
import MTV from "views/MTV/MTV.js";
import Documentary from "views/Documentary/Documentary.js";
import About from "views/About/About.js";

const dashboardRoutes = [
  {
    path: "/welcome",
    name: "Welcome",
    icon: Dashboard,
    component: Welcome,
    layout: "/admin",
  },
  {
    path: "/engineer",
    name: "Software Engineer",
    icon: Person,
    component: Engineer,
    layout: "/admin",
  },
  {
    path: "/instructor",
    name: "Instructor",
    icon: "content_paste",
    component: Instructor,
    layout: "/admin",
  },
  {
    path: "/tech-art",
    name: "Tech in Art Projects",
    icon: LibraryBooks,
    component: TechArt,
    layout: "/admin",
  },
  {
    path: "/recordings",
    name: "Recordings",
    icon: BubbleChart,
    component: Recordings,
    layout: "/admin",
  },
  {
    path: "/MTV",
    name: "Music Videos",
    icon: LocationOn,
    component: MTV,
    layout: "/admin",
  },
  {
    path: "/documentary",
    name: "Oakland Arts Doc Project",
    icon: Notifications,
    component: Documentary,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: Unarchive,
    component: About,
    layout: "/admin",
  },
];

export default dashboardRoutes;
