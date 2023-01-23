import React from "react";

function NameList() {
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;
  const names = ["Bruce", "Daina", "Clark", "Bruce"];
  const person = [
    {
      id: 1,
      name: "Bruce",
      age: 38,
      skill: "React",
    },
    {
      id: 2,
      name: "Daina",
      age: 35,
      skill: "Angularr",
    },
    {
      id: 3,
      name: "Clark",
      age: 29,
      skill: "Vue",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}
export default NameList;
