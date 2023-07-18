import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import homeIcon from "../../assets/images/Home.svg";
import aboutIcon from "../../assets/images/Info Circle.svg";
import contactIcon from "../../assets/images/Profile.svg";

const NavBar = (props) => {
  return (
    <div className={`${props.className} ${classes.navContainer}`}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          end
        >
          <div className={classes.home}>
            <img src={homeIcon} alt="Home Logo" />
            Home
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <div className={classes.about}>
            <img src={aboutIcon} alt="About Logo" />
            About
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <div className={classes.contact}>
            <img src={contactIcon} alt="Contact Logo" />
            Contact
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
