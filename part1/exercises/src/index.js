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

//Exercises part1 d 1.6 - 1.11
const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
const Stat = ({ text, stat }) => {
  return (
    <table>
      <tbody>
        <tr width="110" align="justify">
          <td width="60">{text}</td>
          <td width="50">{stat}</td>
        </tr>
      </tbody>
    </table>
  );
};
const App2 = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sumTotal = good + neutral + bad;
  const avg = ((good + neutral * 0 + bad * -1) / sumTotal).toFixed(2);
  const porcPositive = Math.round((good / sumTotal) * 100);

  const counterGood = () => setGood(good + 1);
  const counterNeutral = () => setNeutral(neutral + 1);
  const counterBad = () => setBad(bad + 1);

  if (sumTotal === 0) {
    return (
      <>
        <Title text="give feedback" />
        <Button onClick={counterGood} text="good" />
        <Button onClick={counterNeutral} text="neutral" />
        <Button onClick={counterBad} text="bad" />
        <Title text="statistics" />
        <p>No feedbach given</p>
      </>
    );
  }
  return (
    <>
      <Title text="give feedback" />
      <Button onClick={counterGood} text="good" />
      <Button onClick={counterNeutral} text="neutral" />
      <Button onClick={counterBad} text="bad" />
      <Title text="statistics" />
      <Stat text="good" stat={good} />
      <Stat text="neutral" stat={neutral} />
      <Stat text="bad" stat={bad} />
      <Stat text="all" stat={sumTotal} />
      <Stat text="average" stat={Number.isNaN(Number(avg)) ? "0" : avg} />
      <Stat
        text="positive"
        stat={Number.isNaN(porcPositive) ? "0%" : porcPositive + "%"}
      />
    </>
  );
};

//Exercises part1 d 1.12 - 1.
const App3 = () => {
  const [selected, setSelected] = useState(0);
  const random = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <button onClick={random}>next anecdote</button>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App3 />, document.getElementById("root"));
