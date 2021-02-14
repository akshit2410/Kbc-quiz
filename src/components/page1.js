import React from "react";
import { Link } from "react-router-dom";

import Button from "./button";
import { useState } from "react";
const Page1 = () => {
  const [name, setName] = useState("");
  const newTo = {
    pathname: "/game",
  };
  return (<>
    <form className="user">
      <h1 className="userheading">Username</h1>
      <input
        className = "inp"
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Link to={newTo}>
        <Button clas="btn" color="white" bgcolor="blue" text="Enter"></Button>
      </Link>
    </form>
    </>
  );
};

export default Page1;
