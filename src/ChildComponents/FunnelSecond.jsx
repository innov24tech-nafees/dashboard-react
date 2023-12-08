import React, { useEffect } from "react";
import D3Funnel from 'd3-funnel';
// import '../css/Funnel.css';

// import * as ReactDOM from "react-dom";


function FunnelSecond(){
  useEffect(() => {
  const data = [
    { label: 'Inquiries', value: 1500 },
    { label: 'Applicants', value: 100 },
    { label: 'Admits', value: 500 },
    { label: 'Deposits', value: 200 },
];
const options = {
    block: {
        dynamicHeight: true,
        minHeight: 20,
    },
    label: {
      fontFamily: 'Arial', // Set your desired font family
      fill: 'white', // Set your desired label color
      format: '{l}: {f}',
      fontSize: '12px',
    },
    tooltip: {
      enabled: true,
      format: '{l}: {f}',
    },
    curve: {
      enabled: true,
      height: 20,
      shade: -0.4,
    },

};

const chart = new D3Funnel('.funnel');
chart.draw(data, options);
  
return () => {
  chart.destroy();
};
}, []); // Empty dependency array means this effect runs once after the initial render

return (
  <>
<div className="funnel" style={{ height: "300px" }}></div>
</>
);
}

export default FunnelSecond;