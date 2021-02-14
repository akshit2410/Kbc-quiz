import React from "react";
import AnswerButton from "./answer-button";
const Questions = ({
  handleAns,
  data: { question, correct_answer, incorrect_answers },
}) => {
  //check right or wrong.
  //shuffling array so that will get different option right every time
  let shuffled = [correct_answer, ...incorrect_answers]
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  return (
    <>
      <div className="quiz flex justify-center items-center">
        <div className="question bg-white p-4 rounded-lg showdow-md">
          <h1
            className="text-2xl"
            dangerouslySetInnerHTML={{ __html: question }}
          />
        </div>
        <div
          id="anscontain"
          className="answers flex justify-center items-center"
        >
          {shuffled.map((answer) => (
            <AnswerButton
              onClick={function (e) {
                handleAns(answer, e.target);
              }}
              clas={answer === correct_answer ? "G" : "L"}
              text={answer}
            ></AnswerButton>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
