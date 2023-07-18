import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Logo from "../../assets/images/Logo.svg";

const Header = (props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <header className={props.className}>
      <div className={classes.logo}>
        <img src={Logo} alt="Quizzylogo" onClick={navigateHandler} />
        <h3>Free Online Quiz Platform</h3>
      </div>
    </header>
  );
};

export default Header;
