import { useState } from 'react';

const Display = ({ counter }) => <div>{counter}</div>;
  
const Button = ({ onClick, text }) =>
  <button onClick={onClick}>{text}</button>;

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return ( 
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);
  
  const handleLeftClick = () =>
  {
    let updatedLeft = clicks.left+ 1;
    setClicks({ ...clicks, left: updatedLeft});
    setAll(allClicks.concat('L'));
    
    setTotal(clicks.left + clicks.right);
  }
  const handleRightClick = () =>
  {
    let updatedRight = clicks.right+1;
    setClicks({ ...clicks, right: updatedRight });
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updatedRight);

  }


  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text={'left'} />
      <Button onClick={handleRightClick} text={'right'} />
      {clicks.right}
      <p>total: {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default App;
