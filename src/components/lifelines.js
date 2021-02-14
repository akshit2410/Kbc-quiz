import React from 'react'
import LifelineButton from './lifeline-buttons'

const Lifelines = ({handleswap,handleFiftyFifty}) => {
    return (
        <>
        <div className="lifeline">
            <LifelineButton 
            clas="btn bt1"
            color="black"
            bgcolor="white"
            text="50-50"
            onClick={function (e) {
                handleFiftyFifty();
              }}
            />
            <LifelineButton
            clas="btn bt1"
            color="black"
            bgcolor="white"
            text="swap questions" 
            onClick={function (e) {
                handleswap();
              }}
            />
        </div>
        </>
    )
}

export default Lifelines
