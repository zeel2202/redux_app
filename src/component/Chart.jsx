import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart',  
    },
    legend:{
      display:true,
      position:'right'
    }
  },
  responsive: true,
  interaction: {
    mode: 'index' ,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [200,-358,500,-930,360,120,50],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [100,-580,50,-530,300,720,600],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 3',
        data: [-150,100,500,-60,70,-80,60],
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 1',
      },
    ],
  };
function Chart() {
  return (
    <Bar options={options} data={data} />
  )
}

export default Chart