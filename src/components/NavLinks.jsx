import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/git">Git Setting</NavLink>
        </li>
        <li>
          <NavLink to="/js">JavaScript</NavLink>
        </li>
        <li>
          <NavLink to="/react">React</NavLink>
        </li>
      </ul>
    </div>
  );
}