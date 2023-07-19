import React, { useState } from "react";
import Header from "../components/layouts/Header";
import { TestQuestions } from "../Questions/TestQuestion.jsx";
import Quiz from "../components/Quiz.jsx";
import "./SectionOne.css";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/images/Logo.svg";

const SectionOne = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="sectionHeader">Pick a Subject</div>
        {/* <Quiz /> */}
        <div className="thecards">
          <div>
            <Link to="/TestQuiz" className="QuizCard">
              <p className="cardText">Super-Hero</p>
            </Link>
          </div>
          <div>
            <Link to="/TestQuiz" className="QuizCard1">
              <p className="cardText">Sport</p>
            </Link>
          </div>
          <div>
            <Link to="/TestQuiz" className="QuizCard2">
              <p className="cardText">Animals</p>
            </Link>
          </div>
          <div>
            <Link to="/TestQuiz" className="QuizCard3">
              <p className="cardText">Auto</p>
            </Link>
          </div>
          <div>
            <Link to="/TestQuiz" className="QuizCard4">
              <p className="cardText">World</p>
            </Link>
          </div>
          <div>
            <Link to="/TestQuiz" className="QuizCard5">
              <p className="cardText">General</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SectionOne;
