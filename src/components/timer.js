import React from 'react'
import {useState,useEffect} from 'react'

const Timer = ({quithandler}) => {
    const  [seconds, setSeconds] = useState(120);
    useEffect(() => {
        if (seconds > 0) {
          setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
          quithandler()
        }
      },[quithandler, seconds]);
    return (
        <div>
            {seconds}
        </div>
    )
}

export default Timer
