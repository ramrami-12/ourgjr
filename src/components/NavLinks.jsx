import { NavLink } from "react-router-dom";
import styles from "../styles/main.module.css";

export default function NavLinks() {
  const activeStyle = {
    color: "#748DA6",
    textDecoration: "none",
  };
  const mainStyle = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div>
      <ul>
        <li className={styles.li}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : mainStyle)}
            end
          >
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/intro"
            style={({ isActive }) => (isActive ? activeStyle : mainStyle)}
            end
          >
            Introduction
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/git"
            style={({ isActive }) => (isActive ? activeStyle : mainStyle)}
            end
          >
            Git Setting
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/js"
            style={({ isActive }) => (isActive ? activeStyle : mainStyle)}
            end
          >
            JavaScript
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/react"
            style={({ isActive }) => (isActive ? activeStyle : mainStyle)}
            end
          >
            React
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
