import React from "react";
import Person from "../Person";

function NameList() {
  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;
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
  const personList = person.map((persons) => (
    <Person key={persons.id} persons={persons} />
  ));
  return <div>{personList}</div>;
}
export default NameList;
