import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const city = "Toronto";
  return (
    <div>
      <h1>Hello everybody</h1>
      <Hello name="Diana" country="Canada" city={city} kms={23} />
    </div>
  );
};

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>
        I live in {props.country}, {props.city} near {props.kms} from here !
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
