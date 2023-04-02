import React,{useState} from 'react';

// import './css/library/libraries.css';
import "./css/statCard.css";

import DailyPlayStats from './components/statistics/daily-play-count';

function Statistics() {

  const [days, setDays] = useState(60);
  const [input, setInput] = useState(60);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (input < 1) {
        setInput(1);
        setDays(0);
      } else {
        setDays(parseInt(input));
      }

      console.log(days);
    }
  };


      return (
        <div className="watch-stats">
        <div className="Heading">
          <h1>Statistics</h1>
          <div className="date-range">
            <div className="header">Last</div>
            <div className="days">
              <input
                type="number"
                min={1}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="trailer">Days</div>
          </div>
  
          
        </div>
        <div >
        <DailyPlayStats days={days}/>
        
  
        </div>
      </div>
  
 
      
      );
      
}

export default Statistics;


