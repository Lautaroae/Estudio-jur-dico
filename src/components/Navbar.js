import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBalanceScale } from "react-icons/fa";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/home" className="navbar-logo">
              Estudio Jurídico{" "}
              <FaBalanceScale
                className="navbar-icon"
                onClick={closeMobileMenu}
              />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link
                  to="/product"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link> */}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
