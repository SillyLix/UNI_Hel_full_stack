import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick} > {text} </button>;
const PrintVote = ({ votes, index }) => <div>{votes[index]}</div>;
const PrintBest = ({ bestAnecdotes }) => {
  if (bestAnecdotes === "")
    return <>No anecdotes has been voted yet!</>;
  else return <>{bestAnecdotes} <br /></>;
}
const Header = ({ text }) => <h1>{text}</h1>;
const PrintAnecdotes = ({ text }) => <>{text} <br /></> ;

const App = () => {
  // anecdotes and selections
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    "It's OK to figure out murder mysteries, but you shouldn't need to figure out code. You should be able to read it."
  ];

  // useStates
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [bestAnecdotes, setBestAnecdotes] = useState({quote: "", voteIndex: 0})
  
  const SetRandomSelected = () => {
    let randomNum = Math.floor(Math.random() * anecdotes.length);
    while (randomNum === selected) {
      randomNum = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(randomNum);
  }
  
  const increaseVote = () => {
    const newVotes = [...votes];
    newVotes[selected] = newVotes[selected] + 1;

    setVotes(newVotes);

    const maxVotes = Math.max(...newVotes);
    const maxIndex = newVotes.indexOf(maxVotes);

    setBestAnecdotes({
      quote: anecdotes[maxIndex],
      voteIndex: maxIndex,
    });
  };
    

  return (
    <div>
      <Header text={'Anecdote of the day'} />
      <PrintAnecdotes text={anecdotes[selected]}/>
      <PrintVote votes={votes} index={selected} />
      <Button onClick={increaseVote} text={'vote'} />
      <Button onClick={SetRandomSelected} text={'next anecdote'} />
      <Header text={'Anecdote with most votes'} />
      <PrintBest bestAnecdotes={bestAnecdotes.quote} />
      <PrintVote votes={votes} index={bestAnecdotes.voteIndex} />

    </div>
  );
};

export default App;