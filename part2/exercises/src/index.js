import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

/*const App = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <Course course={course} />;
};

const Course = ({ course }) => {
  return (
    <div>
      {course.map((item) => (
        <>
          <Header name={item.name} />
          <Content parts={item.parts} />
          <Total parts={item.parts} />
        </>
      ))}
    </div>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} parts={part} />
      ))}
    </div>
  );
};
const Part = ({ parts }) => {
  return (
    <div>
      <p>
        {parts.name} {parts.exercises}
      </p>
    </div>
  );
};

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
};*/

ReactDOM.render(<App />, document.getElementById("root"));
