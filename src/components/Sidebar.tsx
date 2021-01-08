import { NavLink as Link } from "react-router-dom";
import SidebarData from "./SidebarData";
import "../styles/sidebar.scss"

const Sidebar = (): JSX.Element => {
  return (
    <>
      {
        SidebarData.map(({ path, title, icon, key }): JSX.Element => (
          <Link exact to={path}
            activeClassName="active__item" className={`sidebar__item`} key={key}>
            <span>{icon}</span>
            <h6 style={{ textTransform: "uppercase" }}>{title}</h6>
          </Link>
        ))
      }
    </ >
  )
}

export default Sidebar




