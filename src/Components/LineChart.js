import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


export default function LineChart(graphLabel, graphValues) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
    const labels = graphLabel.graphLabel
    const graph_values=graphValues.graphValues;
    const data = {
      labels,
      datasets: [
        {
          label: 'Weight Data',
          data: [53, 3, 3, 3, 3, 3, 3, 3],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        
      ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                  
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

  return (
        <div className='p-5'>
            <Line data={data} options={options}  height={400} width={800} />
        </div>

  )
}




