import React, { useEffect } from 'react';
import Chart from 'react-google-charts';

const MonthlyTurnoverChart = () => {
  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    const data = [
      ["Months", "Monthly Turnover Rate in Percentage"],
      ["Jan", 42],
      ["Feb", 30],
      ["Mar", 37],
      ["Apr", 34],
      ["May", 29],
      ["June", 36],
      ["July", 39],
      ["Aug", 14],
      ["Sep", 10],
      ["Oct", 14],
      ["Nov", 7],
      ["Dec", 5],
    ];

    const options = {
      chart: {
        title: "",
      },
      bars: 'vertical',
      vAxis: {
        title: 'Monthly Turnover Rate in Percentage',
      },
      legend: { position: 'none' },
      bar: { groupWidth: '90%' },
      colors: ['#008000'], // Green color
      animation:{
        startup: true,
        duration: 800,
        easing: 'out',
      },
    };

    return (
      <Chart
        width={'70%%'}
        height={'400px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        rootProps={{ 'data-testid': '1' }}
      />
    );
  };

  return (
    <div>
      {drawChart()}
    </div>
  );
};

export default MonthlyTurnoverChart;
