import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { download } from '../../images'
// const data = {
//   labels: ['1', '2', '3', '4', '5', '6'],
//   datasets: [
//     {
//       label: '# of Red Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: 'rgb(255, 99, 132)',
//     },
//     {
//       label: '# of Blue Votes',
//       data: [2, 3, 20, 5, 1, 4],
//       backgroundColor: 'rgb(54, 162, 235)',
//     },
//     {
//       label: '# of Green Votes',
//       data: [3, 10, 13, 15, 22, 30],
//       backgroundColor: 'rgb(75, 192, 192)',
//     },
//   ],
// };
// const data = this.props.graphData
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const GroupedBar = (props) => {
  const [graphData, setGraphData] = useState(props.graphData); 
   const downloadData = () => {
    // var formdata = new FormData();
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://127.0.0.1:5060/download", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  return (
  <>
    <div className='header'>
      <h1 className='title'>Intel X86 - 2-5X Perormance</h1>
      <button className="btn download_btn" onClick={() =>downloadData()}>
        <img src={download.default} alt="reset" />
        Download optimised module
      </button>
    </div>
    <Bar data={graphData} options={options} width={120}
      height={60} />
  </>
)}

export default GroupedBar;