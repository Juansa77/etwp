import "./NavBar.css"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navigation">
      <ul className="navbar">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/profile">
          <li>Profile</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
