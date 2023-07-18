import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalHeader">
          <div className="modalTitle">
            <p>*Ensure you answwer all questions in the quiz*</p>
            <p>
              *You can go back to previous questions to make sure your answers
              are correct*
            </p>
          </div>
          <div>
            <span className="close-button" onClick={onClose}>
              <button className="viewBtn" type="button">
                close
              </button>
            </span>
          </div>
        </div>
        <div className="modalDesc">
          <div className="modalText">
            <h4>Please note the following:</h4>
            <ul>
              <li>Answer one question at a time</li>
              <li>
                Difficulty of questions will increase for the upcoming question
                irrespective of result of a previous question
              </li>
              <li>
                Get the detailed overview of your question answer session and
                tips on how you can improve
              </li>
            </ul>
          </div>
        </div>
        <div className="modalFooter">
          <Link
            to="/SectionOne"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <button
              className="viewBtn"
              type="button"
              onClick={() => handleSuccess()}
            >
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;

{
  /* <Modal
  className="modal"
  show={showModal}
  onHide={handleClose}
  renderBackdrop={renderBackdrop}
  style={{ width: "800px", marign: "auto" }}
>
  <div></div>
</Modal>; */
}
