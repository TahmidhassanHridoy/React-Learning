import React from "react";

const Hello = () => {
  // return
  /*<div>
      <h1>hello tahmid</h1> using JSX
    </div>
    */

  return React.createElement(
    "div",
    { id: "hello", className: "dummy class" }, //Without using JSX
    React.createElement("h1", null, "React element")
  );
};
export default Hello;
