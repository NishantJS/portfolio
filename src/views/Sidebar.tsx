import { NavLink as Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import "../assets/sidebar.scss"

const Sidebar = (): JSX.Element => {

  return (
    <>
      {
        SidebarData.map(function ({ path, title, icon, key }): JSX.Element {
          return (
            <Link exact to={path}
              activeClassName="active__item" className={`sidebar__item`}>
              <span >{icon}</span>
              <h6 style={{ textTransform: "uppercase" }}>{title}</h6>
            </Link>
          );
        })
      }
    </ >
  )
}

export default Sidebar




