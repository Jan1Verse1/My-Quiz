import React, { useState } from "react";
import Header from "../components/layouts/Header";
import { TestQuestions } from "../Questions/TestQuestion.jsx";
import Quiz from "../components/Quiz.jsx";
import "./SectionOne.css";
import { Link } from "react-router-dom";

const SectionOne = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="sectionHeader">Section One</div>
        <Quiz />
        {/* <div className="accordion">
          {TestQuestions.map(({ questionText, answerOptions }) => (
            <questions
              questionText={questionText}
              answerOptions={answerOptions}
            />
          ))}
        </div> */}
        <div className="theButtons">
          <Link
            to="/SectionOne"
            //   className={({ isActive }) => (isActive ? classes.active : undefined)}
          >
            <div className="btn">
              <button
                className="viewBtn"
                type="button"
                onClick={() => handleSuccess()}
              >
                Go To Subject Pick
              </button>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SectionOne;
