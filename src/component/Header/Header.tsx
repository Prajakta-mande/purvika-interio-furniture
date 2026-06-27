import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  useEffect(() => {
    if (mobileOpen) {
      // Add padding to prevent the jump when scrollbar disappears
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [mobileOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"; // stop scroll lag
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className={`header ${sticky ? "sticky" : ""}`}>
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="brand">
          <img src="/images/logo.png" alt="Purvika Interio" />
          <div className="brand-text">
            <h1>PURVIKA INTERIO</h1>
            <p>Innovative Concepts... Creative Design</p>
          </div>
        </div>

        <div className="top-info">
          <div>
            <small>Call Us</small>
            <strong>+91 9422258307</strong>
          </div>
          <div>
            <small>Email</small>
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
            <NavLink to="/home" onClick={closeAll}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeAll}>
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
                  onClick={closeAll}
                >
                  Modular Office Furniture
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Commercial/Institutional-office-furniture"
                  onClick={closeAll}
                >
                  Institutional
                </NavLink>
              </li>
              <li>
                <NavLink to="/Commercial/Turnkey-Solution" onClick={closeAll}>
                  Turnkey Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/Commercial/Sofa" onClick={closeAll}>
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink to="/Commercial/Chair" onClick={closeAll}>
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
                <NavLink to="/Residential/living-room" onClick={closeAll}>
                  Living Room
                </NavLink>
              </li>
              <li>
                <NavLink to="/Residential/Bedroom" onClick={closeAll}>
                  Bedroom
                </NavLink>
              </li>
              <li>
                <NavLink to="/Residential/kitchen-trolley" onClick={closeAll}>
                  Kitchen Trolleys
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/Projects/projects" onClick={closeAll}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/Contact/contact" onClick={closeAll}>
              Contact
            </NavLink>
          </li>
        </ul>

        <a
          href="/brochure/Broucher-Purvika-interio.pdf"
          target="_blank"
          rel="noreferrer"
          className="brochure-btn"
        >
          View Brochure →
        </a>
      </nav>
    </header>
  );
};

export default Header;
