import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="menu">
      <div className="logo">Purvika Interior</div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`menu-links ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/Home" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
       <li
        className="dropdown"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <span>Commercial Design ▾</span>

        {dropdown && (
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/Commercial/modular-office-furniture">
                  Modular-Office-Furniture
              </NavLink>
            </li>

            <li>
              <NavLink to="/products">Institutional Furniture</NavLink>
            </li>

            <li>
              <NavLink to="/products">Turnkey Solution</NavLink>
            </li>

            <li>
              <NavLink to="/products">Chairs</NavLink>
            </li>

            <li>
              <NavLink to="/products">Sofa</NavLink>
            </li>
          </ul>
        )}
      </li>

       

        {/* <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Menu;
