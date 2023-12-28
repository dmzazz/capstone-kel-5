import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const [user, setUser] = useState("");
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">SelfCare</Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        {/* <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li> */}
        <li>
          <a href="/appointment" className="navbar-links">
            Consul
          </a>
        </li>

        {user.role === "user" ? (
          <li>
            <a href="/dashboard/user" className="navbar-links">
              Schedule
            </a>
          </li>
        ) : user.role === "admin" ? null : (
          <li>
            <a href="/login" className="navbar-links">
              Schedule
            </a>
          </li>
        )}
      </ul>

      {user ? (
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {user.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href={
                user.role === "admin" ? "/dashboard/admin" : "/dashboard/user"
              }
            >
              {user.role === "admin" ? "Dashboad Admin" : "Dashboard"}
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={logout}>
              <span>Logout</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Link to="/login">
          <button className="navbar-btn" type="button">
            Login
          </button>
        </Link>
      )}

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Consul
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#schedule">
              Schedule
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
