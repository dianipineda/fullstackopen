import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = ({ course }) => {
  return (
    <div>
      {course.map((item) => (
        <div key={item.id}>
          <Header name={item.name} />
          <Content parts={item.parts} />
          <Total parts={item.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
