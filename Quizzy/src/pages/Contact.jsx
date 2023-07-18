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
          <p>KPMG Towers</p>
          <p>Bishop Abayode Cole Street,</p>
          <p>Victoria Island,</p>
          <p>Lagos.</p>
          <p>
            P: +234 (1) 271 8955 (or 8599)Career & Recruitment Team:{" "}
            <a href="mailto:NG-FM Careers@ng.kpmg.com">
              NG-FM Careers@ng.kpmg.com
            </a>
          </p>
          <p>
            People, Performance & Culture:{" "}
            <a href="mailto:NG-FM PPC Helpdesk@ng.kpmg.com">
              NG-FM PPC Helpdesk@ng.kpmg.com
            </a>
          </p>
        </div>
        <a href="https://kpmg.com/ng/en/home.html" target="_blank">
          <button className={classes.seeBtn}>See more</button>
        </a>
      </main>
    </div>
  );
};

export default Contact;
