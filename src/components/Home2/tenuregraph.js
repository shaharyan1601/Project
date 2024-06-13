import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './tenuregraph.css';

const TenureGraph = () => {
  useEffect(() => {
    const data = {
      labels: ['18 years & over', '25-34 years', '35-44 years', '45-54 years', '55-64 years', '65 years & older'],
      datasets: [
        {
          label: 'Male',
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          data: [8, 10, 12, 6, 4, 3],
        },
        {
          label: 'Female',
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
          data: [6, 9, 10, 5, 3, 2],
        },
      ],
    };

    // Create the bar graph
    const ctx = document.getElementById('barGraph').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Age Group',
            },
            grid: {
                display: false, // Remove x-axis grid lines
              },
          },
          y: {
            title: {
              display: true,
              text: 'Years of Tenure',
            },
            grid: {
                display: false, // Remove y-axis grid lines
              },
          },
        },
      },
    });
  }, []);

  return (
    <div className="chart-container">
      <canvas id="barGraph"></canvas>
    </div>
  );
};

export default TenureGraph;