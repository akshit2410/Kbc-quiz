import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ quithandler, score }) => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (score<6){
    setSeconds(60);
  }else{
    setSeconds("Unlimited time")
  }
  }, [score]);

  // useEffect(() => {
  //   seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  // }, [seconds]);

  useEffect(()=>{
    if(score<6){
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
              quithandler()
              clearInterval(myInterval)
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
        }
    });


  // useEffect(() => {
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     quithandler();
  //   }
  // }, [quithandler, seconds,score]);

  return <div>{seconds}</div>;
};

export default Timer;
