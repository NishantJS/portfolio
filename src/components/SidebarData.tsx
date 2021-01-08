import { ReactComponent as About } from "../assets/about.svg";
import { ReactComponent as Contact } from "../assets/email.svg";
import { ReactComponent as Project } from "../assets/home.svg";

const SidebarData = [
  {
    key: 1,
    title: "about",
    path: "/",
    icon: <About />
  },
  {
    key: 2,
    title: "project",
    path: "/project",
    icon: <Project />
  },
  {
    key: 3,
    title: "contact",
    path: "/contact",
    icon: <Contact />
  }

]

export default SidebarData;