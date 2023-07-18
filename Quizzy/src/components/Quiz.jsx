import React, { useState } from "react";
import { TestQuestions } from "../Questions/TestQuestion.jsx";
import "./Quiz.css";

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < TestQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {TestQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{TestQuestions.length}
            </div>
            <div className="question-text">
              {TestQuestions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {TestQuestions[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                  className="answer-buttn"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
