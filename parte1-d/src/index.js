import React, { useState } from "react";
import ReactDOM from "react-dom";

const Info = ({ name, value }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  //Variables for the calculations
  let total = bad + good + neutral;
  let average = (good - bad) / total;
  let positive = good / total;
  if (total > 0) {
    return (
      <>
        <table>
          <tbody>
            <Info name="good" value={good} />
            <Info name="neutral" value={neutral} />
            <Info name="bad" value={bad} />
            <Info name="all" value={total} />
            <Info name="average" value={average} />
            <Info name="positive" value={positive} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  }
};

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    return setGood(good + 1);
  };

  const increaseNeutral = () => {
    return setNeutral(neutral + 1);
  };

  const increaseBad = () => {
    return setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <h1> Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
