import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick} > {text} </button>;
const Header = ({ text }) => <h1>{text}</h1>;
const PrintStats = ({ review }) => {
  console.log(review)
  return (
    <div>
      good: {review.good} <br />
      neutral: {review.neutral}  <br />
      bad: {review.bad}  <br />
    </div>
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
      < PrintStats review={review} />
    </div>
  )
}

export default App
