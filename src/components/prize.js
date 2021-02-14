import React from "react";
const Price = ({ prize, score }) => {

  return (
    <>
    <div className="prizemain">
    {prize.map((data, key) => {
    if (key > 0) {
      if (key === score+1) {
        return (
          <>
            <div
              className="prizemenu1 bg-white p-4 rounded-lg showdow-md"
              key={key}
            >
              <p>
                {data.score}- {data[data.score]}
              </p>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div
              className="prizemenu bg-white p-4 rounded-lg showdow-md"
              key={key}
            >
              <p>
                {data.score}- {data[data.score]}
              </p>
            </div>
          </>
        );
      }
    } else {
      return (
        <>
          <div
            className="prizemenu bg-white p-4 rounded-lg showdow-md"
            key={key}
          >
            Start-{">"}
          </div>
        </>
      );
    }
  })}
  </div>
  </>
  );
};


export default Price;
