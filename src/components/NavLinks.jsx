import { NavLink } from "react-router-dom";
import styles from "../styles/main.module.css";

export function MainNavLinks() {
  const defaultStyle = {
    color: "black",
    textDecoration: "none",
  };
  const activeStyle = {
    color: "#92B4EC",
    textDecoration: "none",
  };
  return (
    <div>
      <ul>
        <li className={styles.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            end
          >
            Home
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink
            to="/intro"
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            end
          >
            Introduction
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink
            to="/git"
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            end
          >
            Git Setting
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink
            to="/js"
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            end
          >
            JavaScript
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink
            to="/react"
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            end
          >
            React
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export function JSBasicNavLinks() {
  // const liStyle = { marginBottom: 10 };
  return (
    <div>
      <ul>
        <li className={styles.nav}>
          <NavLink to="/js/node" end>
            #1. Node.js
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink to="/js/script" end>
            #2. JavaScript
          </NavLink>
        </li>
        <li className={styles.nav}>
          <NavLink to="/js/class" end>
            #3. Class
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export function JSLUNavLinks() {
  const liStyle = { marginBottom: 10 };
  return (
    <div>
      <ul>
        <li style={liStyle}>
          <NavLink to="/js/data" end>
            #4. Data
          </NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/js/levelup" end>
            #5. Level Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
