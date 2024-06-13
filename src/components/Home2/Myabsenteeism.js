import React from 'react';
import { Chart } from 'react-google-charts';
import ManagementImage from './Management.png';
import SpeedometerImage from './Speedometer.png';
import SpeedometerImage1 from './Speedometer (1).png';
import AbsenceImage from './Absence.png';

const MyAbsenteeism = () => {
  return (
    <div>
      <div
        style={{
          borderRadius: '10px',
          border: '1px solid #878585',
          minHeight: '350px',
          maxWidth: '1220px',
          boxShadow:
            '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset',
          backgroundColor: '#fff',
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
          <div style={{ minWidth: '400px', margin: '10px', minHeight: '320px' }}>
            <div style={{ margin: '30px', minWidth: '200px' }}>
              <input type="date" required="required" />
            </div>
            <div className="custom-select">
              <select>
                <option value="">Department</option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
                <option value="">Option 6</option>
              </select>
            </div>
            <div className="custom-select">
              <select>
                <option value="">Location</option>
                <option value="">Option 1</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
                <option value="">Option 4</option>
                <option value="">Option 5</option>
                <option value="">Option 6</option>
              </select>
            </div>
          </div>
          <div style={{ minWidth: '750px', margin: '10px', minHeight: '320px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                minWidth: '200px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <div
                style={{
                  maxHeight: '140px',
                  minWidth: '300px',
                  border: '1px solid #878585',
                  margin: '10px',
                  padding: '10px',
                  display: 'flex',
                  borderRadius: '10px',
                  boxShadow:
                    '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset',
                  backgroundColor: '#fff'
                }}
              >
                <img style={{ height: '90px', marginTop: '10px' }} src={ManagementImage} />
                <div>
                  <h2 style={{ margin: '10px', fontSize:'20px' }}>Total employee</h2>
                  <h1 style={{ textAlign: 'center', fontWeight: 'normal' }}>2400</h1>
                </div>
              </div>
              <div
                style={{
                  maxHeight: '140px',
                  minWidth: '300px',
                  border: '1px solid #878585',
                  marginTop: '10px',
                  marginRight: '40px',
                  padding: '10px',
                  display: 'flex',
                  borderRadius: '10px',
                  boxShadow:
                    '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset',
                  backgroundColor: '#fff'
                }}
              >
                <img style={{ height: '90px', marginTop: '20px' }} src={SpeedometerImage} />
                <div>
                  <h2 style={{ marginTop: '10px', textAlign: 'center', fontSize:'20px' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;Attendance <br />
                    &nbsp;&nbsp;&nbsp;Percentage
                  </h2>
                  <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}>
                    &nbsp;&nbsp;&nbsp;92%
                  </h1>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                minWidth: '200px',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <div
                style={{
                  maxHeight: '140px',
                  minWidth: '300px',
                  border: '1px solid #878585',
                  margin: '10px',
                  padding: '10px',
                  display: 'flex',
                  borderRadius: '10px',
                  boxShadow:
                    '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset',
                  backgroundColor: '#fff'
                }}
              >
                <img style={{ height: '90px', marginTop: '20px' }} src={AbsenceImage} />
                <div>
                  <h2 style={{ margin: '10px', textAlign: 'center', fontSize:'20px' }}>Average Yearly <br /> Absenteeism</h2>
                  <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}>18 Days</h1>
                </div>
              </div>
              <div
                style={{
                  maxHeight: '140px',
                  minWidth: '300px',
                  border: '1px solid #878585',
                  margin: '10px',
                  marginRight: '40px',
                  padding: '10px',
                  display: 'flex',
                  borderRadius: '10px',
                  boxShadow:
                    '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset',
                  backgroundColor: '#fff'
                }}
              >
                <img style={{ height: '90px', marginTop: '20px' }} src={SpeedometerImage1} />
                <div>
                  <h2 style={{ marginTop: '10px', textAlign: 'center', fontSize:'20px' }}> &nbsp; &nbsp;Absenteeism <br /> &nbsp; &nbsp;Rate</h2>
                  <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}> &nbsp; &nbsp;18.45%</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid #878585',
            boxShadow:
              '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset',
            backgroundColor: '#fff',
            minHeight: '446px',
            minWidth: '600px',
            marginRight: '10px'
          }}
        >
          <div style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: '20px',
                marginRight: '10px'
              }}
            >
              <h2>Absenteeism In Last 5 Years</h2>
              <button
                style={{
                  margin: '30px',
                  background: 'purple',
                  color: '#fff',
                  border: 'none',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  cursor: 'pointer'
                }}
              >
                Years
              </button>
            </div>
          </div>
          <div
            style={{
              height: '350px',
              width: '550px',
              fontFamily: 'Poppins, sans-serif',
              margin: '20px'
            }}
          >
            {/* React Google Chart will be rendered here */}
            <Chart
              width={'550px'}
              height={'350px'}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Years', 'Days', 'Percentage'],
                ['2019', 10, 1.31],
                ['2020', 14, 0.8],
                ['2021', 20, 1.78],
                ['2022', 16, 1.42]
              ]}
              options={{
                title: 'Absenteeism In Last 5 Years',
                subtitle: ' ',
                width: 550,
                chartArea: { width: '50%' },
                hAxis: {
                  title: 'Total Days',
                  minValue: 0
                },
                vAxis: {
                  title: 'Years'
                }
              }}
            />
          </div>
        </div>
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid #969191',
            minHeight: '446px',
            minWidth: '600px',
            marginLeft: '10px',
            boxShadow:
              '0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ marginLeft: '20px', fontFamily: 'Poppins, sans-serif' }}>Absence Reasons</h2>
            <button
              style={{
                margin: '30px',
                background: 'purple',
                color: '#fff',
                border: 'none',
                paddingLeft: '20px',
                paddingRight: '20px',
                cursor: 'pointer'
              }}
            >
              Years
            </button>
          </div>
          <div id="chart_div" style={{ width: '550px', height: '350px' }}>
            {/* React Google Chart will be rendered here */}
            <Chart
              width={'550px'}
              height={'350px'}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Element', 'Days', { role: 'style' }],
                ['Sick', 10, 'light blue'],
                ['Casual', 12, 'light blue'],
                ['Maternity', 20, 'light blue'],
                ['Paternity', 15, 'light blue'],
                ['Bereavement', 15, 'light blue'],
                ['Loss Of Pay', 15, 'light blue']
              ]}
              options={{
                title: ' ',
                hAxis: {
                  title: '',
                  format: 'h:mm a',
                  viewWindow: {
                    min: [7, 30, 0],
                    max: [17, 30, 0]
                  }
                },
                vAxis: {
                  title: 'Absenteeism in Days'
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAbsenteeism;
