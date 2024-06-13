import React from 'react';
import { Chart } from 'react-google-charts';

function AbsenteeismChart() {
  return (
    <Chart
      width={'100%'}
      height={'400px'}
      chartType="ColumnChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Element', 'Days', { role: 'style' }],
        ['Sick', 10, 'light blue'],
        ['Casual', 12, 'light blue'],
        ['Maternity', 20, 'light blue'],
        ['Paternity', 15, 'light blue'],
        ['Bereavement', 15, 'light blue'],
        ['Loss Of Pay', 15, 'light blue'],
      ]}
      options={{
        title: ' ',
        hAxis: {
          title: '',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0],
          },
        },
        vAxis: {
          title: 'Absenteeism in Days',
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
}

export default AbsenteeismChart;
