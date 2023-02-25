import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};
const Header = (props) => {
  console.log("los props de Header son:", props);
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Content = (props) => {
  console.log("los props de Content son:", props);
  return (
    <>
      <Part
        part={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      />
      <Part
        part={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      />
      <Part
        part={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      />
    </>
  );
};

const Part = (props) => {
  console.log("los props de Part son:", props);
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};
const Total = (props) => {
  const arrayExercises = [];
  console.log("los props de Total son:", props);
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.course.parts.forEach((element) => {
          arrayExercises.push(element.exercises);
        })}
        {arrayExercises.reduce((acum, current) => acum + current)}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
