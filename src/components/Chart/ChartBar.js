import React from 'react'; //Not mandatory
import './ChartBar.css';

const ChartBar = (props) => {
  let barfillHeight = '0%';
  if (props.maxValue > 0) {
    barfillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    console.log(barfillHeight);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* Dynamic css in JSX ---- any css property with - like background-color, should be in '' or in camel case */}
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
