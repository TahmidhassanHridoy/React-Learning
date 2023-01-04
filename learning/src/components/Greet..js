import React from "react";

/*function Greet() {
  return <h1>Hello tahmid</h1>;
}*/

const Greet = (props) => {
  const { name, Position } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {Position}
      </h1>
    </div>
  );
};

export default Greet;
