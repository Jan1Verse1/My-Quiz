import React from "react";
import Header from "../components/layouts/Header";
import NavBar from "../components/layouts/NavBar";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <Header className={classes.header} />
      <NavBar className={classes.nav} />
      <main className={classes.main}>
        <div className={classes.contactHeader}>
          <h1>Contact Us</h1>
        </div>
        <div className={classes.content}>
          <p>
            We'd love to hear from you. Get in touch with one of our
            professionals, specialist groups or KPMG offices.
          </p>
          <p>
            Quizzy Place <br /> 4 Edidi Lane <br /> Idunmota <br /> Lagos
            <br /> Nigeria
          </p>

          <p>
            P: 0700 QUIZZY NIG <br />
            <a href="#">ourmail</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Contact;
