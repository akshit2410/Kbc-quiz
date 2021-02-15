import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import Questions from "./questions";
import Prize from "./prize";
import { useState, useEffect } from "react";
import { prizeMoney } from "./score-prize";
import Lifelines from "./lifelines";
import Timer from "./timer";
const Api_Url =
  "https://opentdb.com/api.php?amount=50&category=9&type=multiple";
  
const Page2 = () => {
  //use state constants
  const [prize] = useState(prizeMoney); //prize money loader
  const [questions, setQuestions] = useState([]); //contains all questions from the api
  const [currentIndex, setCurrentIndex] = useState(0); //keep check of the index of the question a user is on.
  const [score, setScore] = useState(0); //keep check of the score of the user.
  const [totalNumberOfQuestions, setTotal] = useState(15); //totalnumber of questions to be rendered for quiz
  const [flag, setFlag] = useState(0); //flag to check swap question is used or not
  const [flag5, setFlag5] = useState(0); //flag to check 50-50 is used or not
  // const [seconds, setSeconds] = useState(60);
  //fetching the data
  //set timeout in useEffect
  useEffect(() => {
    fetch(Api_Url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  //checking if questions exists in api
  if (questions.length > 0) {
    let correct = questions[currentIndex].correct_answer;

    //handle the response wen user clicks the options(any)
    const handleAns = (answer, e) => {
      document.getElementById("anscontain").classList.remove("fiftyHide");
      setCurrentIndex(currentIndex + 1);
      if (answer === correct) {
        setScore(score + 1);
      } else {
        setCurrentIndex(currentIndex + totalNumberOfQuestions + 1);
      }
    };

    // handle when user press quit/give wrong answer/when quiz ends
    const quithandler = () => {
      setCurrentIndex(currentIndex + totalNumberOfQuestions + 1);
    };
    const handleswap = () => {
      console.log("b", score);
      if (flag === 0) {
        setCurrentIndex(currentIndex + 1);
        setTotal(totalNumberOfQuestions + 1);

        setFlag(flag + 1);
      } else {
        alert("you have already used your lifeline switch question");
      }
    };

    //handle the lifeline 50-50
    const handleFiftyFifty = () => {
      console.log("Getting Element");
      if (flag5 === 0) {
        let answerContainer = document.getElementById("anscontain");
        answerContainer.classList.add("fiftyHide");
        console.log(answerContainer);
        setFlag5(flag5 + 1);
      } else {
        alert("you have already used your lifeline 50-50 ");
      }
    };

    //main renderind for page-2 starts
    return currentIndex < totalNumberOfQuestions ? (
      <>
        <div className="container">
          <Link to="/">
            <Button
              clas="btn"
              color="white"
              bgcolor="black"
              text="Back"
            ></Button>
          </Link>
          <Button
            clas="btn"
            color="white"
            bgcolor="red"
            text="Quit"
            onClick={quithandler}
          ></Button>
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "30px",
          }}
        >
          <u>Quiz</u>
        </div>
        <div className="quizbox">
          <Timer quithandler={quithandler} score={score} />
          <Questions data={questions[currentIndex]} handleAns={handleAns} />
        </div>
        <div className="life">
          <Lifelines
            handleswap={handleswap}
            handleFiftyFifty={handleFiftyFifty}
          />
        </div>
        <Prize score={score} prize={prize} />
      </>
    ) : (
      <>
        <div style={{ marginTop: "30%", justifyContent: "center" }}>
          <Link to="/">
            <Button
              clas="btn"
              color="white"
              bgcolor="black"
              text="Start Again"
            ></Button>
          </Link>
          <div style={{ marginTop: "50%" }}>
            <h2 className="loading  text-2xl text-black font-bold">
              Quiz Ended.
            </h2>
            <h2 className="score text-2xl text-black font-bold">
              Your score is {score}.
            </h2>
            <h2 className="score text-2xl text-black font-bold">
              Your Prize Money is {prize[score][score]}.
            </h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <h2 className="loading text-2xl text-white font-bold">Loading...</h2>
    );
  }
};

export default Page2;
