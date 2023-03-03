//Exercises part1 a-c
import React, { useState } from "react";
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
//ReactDOM.render(<App />, document.getElementById("root"));

//Exercises part1 d
const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Stat = ({ text, totalCount }) => {
  return (
    <>
      <p>
        {text} {totalCount}
      </p>
    </>
  );
};
const App2 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const counterGood = () => setGood(good + 1);
  const counterNeutral = () => setNeutral(neutral + 1);
  const counterBad = () => setBad(bad + 1);
  return (
    <>
      <Title text="give feedback" />
      <Button onClick={counterGood} text="good" />
      <Button onClick={counterNeutral} text="neutral" />
      <Button onClick={counterBad} text="bad" />
      <Title text="statistics" />
      <Stat text="good" totalCount={good} />
      <Stat text="neutral" totalCount={neutral} />
      <Stat text="bad" totalCount={bad} />
    </>
  );
};

ReactDOM.render(<App2 />, document.getElementById("root"));
