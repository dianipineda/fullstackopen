import React from "react";
const Total = ({ parts }) => {
  return (
    <div>
      <b>
        Total of{" "}
        {parts
          .map((exer) => exer.exercises)
          .reduce((acum, curr) => acum + curr)}{" "}
        exercises
      </b>
    </div>
  );
};
export default Total;
