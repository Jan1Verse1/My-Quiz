import React, { useState } from "react";
import Header from "../components/layouts/Header";
import NavBar from "../components/layouts/NavBar";
import Modal from "../components/layouts/Modal";
import classes from "./Home.module.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={classes.container}>
      <Header className={classes.header}></Header>
      <NavBar className={classes.nav}></NavBar>
      <main className={classes.main}>
        <div className={classes.intro}>
          <div className={classes.introText}>
            <h1>Welcome to Quizzy</h1>
            <p>Best Online Quiz platform</p>
            <div className={classes.btn}>
              <button
                className={classes.viewBtn}
                type="button"
                onClick={() => setOpenModal(true)}
              >
                Access Quiz
              </button>
            </div>
          </div>
        </div>

        <div className={classes.quickAction}>
          <div className={classes.cardContainer}>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <h4>Who we Are</h4>
                <p>
                  Quizzy is a great quiz platform for you to have fun and learn
                  as you do. We have a great repository of different subject
                  matters. Our quiz are made up of 20 question with each
                  question having a value of 5 points. The total number of
                  points is determined by the number of questions answered
                  correctly.
                </p>
              </div>
            </div>
            <div className={classes.card}>
              <div className={classes.cardText}>
                <h4>Privacy Policy</h4>
                <p>
                  Quizzy is dedicated to protecting the confidentiality and
                  privacy of information entrusted to it. As part of this
                  fundamental obligation, Quizzy is committed to the appropriate
                  protection and use of personal information (sometimes referred
                  to as “personal data”, "personally identifiable information"
                  or "PII") that has been collected online..
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Home;
