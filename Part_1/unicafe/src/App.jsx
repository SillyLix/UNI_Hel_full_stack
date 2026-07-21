import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick} > {text} </button>;
const Header = ({ text }) => <h1>{text}</h1>;
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const PrintStats = ({ review }) => {

  if (review.good === 0 && review.bad === 0 && review.neutral === 0)
    return (<p>No feedback given</p>);


  let all = review.good + review.bad + review.neutral;
  let avg = (review.good - review.bad) / all;
  let posPercent = review.good / all * 100;
  posPercent += '%';
  console.log(review)
  return (

    <table>
      <tbody>
        <StatisticLine text={'good'} value={review.good} />
        <StatisticLine text={'neutral'} value={review.neutral} />
        <StatisticLine text={'bad'} value={review.bad} />
        <StatisticLine text={'all'} value={all} />
        <StatisticLine text={'average'} value={avg} />
        <StatisticLine text={'positive'} value={posPercent} />
      </tbody>
    </table>
  )
}

function App() {
  const [review, setReview] = useState({good: 0,neutral: 0,bad: 0});

  const increaseGood = () => setReview({...review, good: review.good + 1});
  const increaseNeutral = () => setReview({...review, neutral: review.neutral +1 });
  const increaseBad = () => setReview({...review, bad: review.bad + 1});

  return (
    <div>
      <Header text={'Give Feedback'} />
      <Button onClick={increaseGood} text={'Good'} />
      <Button onClick={increaseNeutral} text={'Neutral'} />
      <Button onClick={increaseBad} text={'Bad'} />
      
      <Header text={'Statistics'} />
      <PrintStats review={review} />
    </div>
  )
}

export default App
