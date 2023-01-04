import React from "react";

function Person({ persons }) {
  return (
    <div>
      <h2>
        I am {persons.name} . My age is {persons.age} old .I know{" "}
        {persons.skill}
      </h2>
    </div>
  );
}

export default Person;
