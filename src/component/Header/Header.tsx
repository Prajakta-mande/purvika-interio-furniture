import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="brand">
          <img src="/images/logo.png" alt="Purvika Interio" />
          <div className="logo-text">
            <h1>PURVIKA INTERIO</h1>
            <p>Innovative Concepts... Creative Design</p>
          </div>
        </div>

        <div className="top-info">
          <div>
            <small>Call Us:</small>
            <strong>+91-9422258307</strong>
          </div>
          <div>
            <small>Email:</small>
            <strong>purvikainterio@gmail.com</strong>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className="nav-bar">
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/Home" onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>
              About Us
            </NavLink>
          </li>

          {/* COMMERCIAL */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("commercial")}>
              Commercial Design ▾
            </span>
            <ul
              className={`dropdown-menu ${
                openMenu === "commercial" ? "show" : ""
              }`}
            >
              <li>
                <NavLink
                  to="/Commercial/modular-office-furniture"
                  onClick={closeMobileMenu}
                >
                  Modular Office Furniture
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Commercial/Institutional-office-furniture"
                  onClick={closeMobileMenu}
                >
                  Institutional
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Commercial/Turnkey-Solution"
                  onClick={closeMobileMenu}
                >
                  Turnkey Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/Commercial/Sofa" onClick={closeMobileMenu}>
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink to="/Commercial/Chair" onClick={closeMobileMenu}>
                  Chair
                </NavLink>
              </li>
            </ul>
          </li>

          {/* RESIDENTIAL */}
          <li className="dropdown">
            <span onClick={() => toggleMenu("residential")}>
              Residential Design ▾
            </span>
            <ul
              className={`dropdown-menu ${
                openMenu === "residential" ? "show" : ""
              }`}
            >
              <li>
                <NavLink to="/Residential/LivingRoom" onClick={closeMobileMenu}>
                  Living Room Interior
                </NavLink>
              </li>
              <li>
                <NavLink to="/Residential/Bedroom" onClick={closeMobileMenu}>
                  Bedroom Interior
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Residential/kitchenTrolley"
                  onClick={closeMobileMenu}
                >
                  Kitchen Trolleys
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/Projects/Projects" onClick={closeMobileMenu}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/Contact/Contact" onClick={closeMobileMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <a
          href="/brochure/Purvika-Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="brochure-btn"
        >
          View Brochure →
        </a>
      </nav>
    </header>
  );
};

export default Header;
