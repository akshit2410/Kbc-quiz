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
  const [prize] = useState(prizeMoney);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalNumberOfQuestions, setTotal] = useState(15);
  const [flag, setFlag] = useState(0);
  const [flag5, setFlag5] = useState(0);
  // const [time,setTime]=useState(0);
  //fetch
  //set timeout in useEffect
  useEffect(() => {
    fetch(Api_Url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  // var flag = true;
  if (questions.length > 0) {
    let correct = questions[currentIndex].correct_answer;
    const handleAns = (answer, e) => {
      document.getElementById("anscontain").classList.remove("fiftyHide");
      setCurrentIndex(currentIndex + 1);
      if (answer === correct) {
        e.style.backgroundColor = "green";
        setInterval(() => {
          e.style.backgroundColor = "white";
        }, 20);
        setScore(score + 1);
      } else {
        e.style.backgroundColor = "red";
        setCurrentIndex(currentIndex + totalNumberOfQuestions + 1);
      }
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
    const quithandler = () => {
      setCurrentIndex(currentIndex + totalNumberOfQuestions + 1);
    };
    // var flag50 =0
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
        <div style={{textAlign:"center",fontFamily:"sans-serif",fontSize:"30px"}}><u>Quiz</u></div>
        <div className="quizbox">
          <Timer />
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
        <div style={{marginTop:"30%",justifyContent:"center"}} >
          <Link to="/">
            <Button
              clas="btn"
              color="white"
              bgcolor="black"
              text="Start Again"
            ></Button>
          </Link>
          <div style={{marginTop:"50%"}}>
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
