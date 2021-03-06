import React from "react";

const Button = ({ clas, color, bgcolor, text, onClick }) => {
  return (
    <button
      className={clas}
      dangerouslySetInnerHTML={{ __html: text }}
      style={{ backgroundColor: bgcolor, color: color }}
      onClick={onClick}
    >
    </button>
  );
};

export default Button;
