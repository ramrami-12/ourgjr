import { NavLink } from "react-router-dom";

export function JSBasicNavLinks() {
  const liStyle = { marginBottom: 10 };
  return (
    <div>
      <ul>
        <li style={liStyle}>
          <NavLink to="/js/node">#1. Node.js</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/js/script">#2. JavaScript</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/js/class">#3. Class</NavLink>
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
          <NavLink to="/js/data">#4. Data</NavLink>
        </li>
        <li style={liStyle}>
          <NavLink to="/js/levelup">#5. Level Up</NavLink>
        </li>
      </ul>
    </div>
  );
}
