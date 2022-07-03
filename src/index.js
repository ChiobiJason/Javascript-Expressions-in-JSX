import React from "react";
import ReactDOM from "react-dom";

const firstName = "Jason";
const lastName = "Chiobi";
const luckyNumber = 10;

ReactDOM.render(
  <div>
    <h1>
      Hello {firstName + "" + lastName} {`${firstName} ${lastName}`} {firstName}{" "}
      {lastName}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
