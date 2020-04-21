import React, { useState } from "react";
import ReactDOM from "react-dom";

const Most = ({ votes, anecdotes }) => {
  let max = -1;
  let maxId = -1;

  for (let i = 0; i < Object.keys(votes).length; i++) {
    if (votes[i] > max) {
      max = votes[i];
      maxId = i;
    }
  }

  return (
    <>
      <p>{anecdotes[maxId]}</p>
      <p>Has {votes[maxId]} votes</p>
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([]);
  //To initialize the vector
  if (votes.length === 0) {
    for (let i = 0; i < props.anecdotes.length; i++) {
      votes[i] = 0;
    }
  }

  const nextSelected = () => {
    let selected = Math.floor(Math.random() * props.anecdotes.length);

    return setSelected(selected);
  };

  const changeVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;

    return setVotes(copy);
  };

  return (
    <>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <button onClick={changeVote}>Vote</button>
      <button onClick={nextSelected}>Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Most votes={votes} anecdotes={anecdotes} />
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

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
