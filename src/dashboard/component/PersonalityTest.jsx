import React, { useState } from "react";
import "../style/PersonalityTest.css";
import axios from "axios";

function PersonalityTest() {
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      (question1 && question2) ||
      (question3 && question4) ||
      (question5 && question6) ||
      (question7 && question8)
    ) {
      const formData = {
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
      };

      axios
        .post("/api/submit-personality-test", formData)
        .then((response) => {
          console.log("Response from:", response.data);
        })
        .catch((error) => {
          console.error("Error submitting test:", error);
        });
    } else {
      alert("Please answer all questions.");
    }
  };

  return (
    <div className="testConatiner">
      <form className="form7">
        <br />
        <br />
        <h1>PERSONALITY TEST</h1>
        <br />
        <br />
        <span>ACCURATE NEUTRAL INACCURATE</span>
        <br />
        <br />
        <div className="p_1">
          <p>
            question1. I accept people the way they are <br />
          </p>
          <div className="radio_1">
            <div className="radio">1</div>
            <div className="radio">2</div>
            <div className="radio">3</div>
            <div className="radio">4</div>
            <div className="radio">5</div>
          </div>
        </div>

        <div className="p_1">
          <p>question2. I have a kind word for everyone</p>
          <div className="radio_1">
            <div className="radio">1</div>
            <div className="radio">2</div>
            <div className="radio">3</div>
            <div className="radio">4</div>
            <div className="radio">5</div>
          </div>
        </div>

        <div className="p_1">
          <p>question3. I really enjoy socializing</p>
          <div className="radio_1">
            <div className="radio">1</div>
            <div className="radio">2</div>
            <div className="radio">3</div>
            <div className="radio">4</div>
            <div className="radio">5</div>
          </div>
        </div>

        <div className="p_1">
          <p>question4. I am the life of the party</p>
          <div className="radio_1">
            <div className="radio">1</div>
            <div className="radio">2</div>
            <div className="radio">3</div>
            <div className="radio">4</div>
            <div className="radio">5</div>
          </div>
        </div>

        <div className="p_1">
          <p>question5. I am skilled in handling social situations</p>
          <div className="radio_1">
            <div className="radio">1</div>
            <div className="radio">2</div>
            <div className="radio">3</div>
            <div className="radio">4</div>
            <div className="radio">5</div>
          </div>
        </div>

        <div className="p_1">
          <p>question6. I get chores done right away</p>
          <div className="radio_1">
            <div className="radio">1</div>
            <div className="radio">2</div>
            <div className="radio">3</div>
            <div className="radio">4</div>
            <div className="radio">5</div>
          </div>
        </div>

        <div className="p_1">question7. What's your religion denomination?</div>
        <input type="text" />
        <br />
        <br />
        <div className="p_1">
          question8. Would you prefer someone of your religion denomination?
        </div>
        <div className="radio">Yes</div>
        <br />
        <div className="radio">No</div>
        <br />
        <button type="submittest">submit</button>
      </form>
    </div>
  );
}

export default PersonalityTest;
