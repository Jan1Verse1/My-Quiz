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
        <div>
          <Link to="/TestQuiz" className="QuizCard">
            {" "}
            <img src={Logo} alt="Quizzylogo" />
            Testing
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SectionOne;
