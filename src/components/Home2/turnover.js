import React from "react";
import Groupt from "components/Groupt.png";
import MonthlyTurnoverChart from "./turnoverGraph";
import { Chart } from 'react-google-charts';

export default function Turnover() {
  return (
    <div className="leave__history__container loan_list">

      <h3> <img src={Groupt} alt="" /> Employee Turnover Rate</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid #878585",
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
              backgroundColor: "#fff",
              minHeight: "446px",
              minWidth: "722px",
              margin: "10px",
            }}
          >
            <div style={{ fontFamily: "Poppins, sans-serif" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginRight: "10px",
                }}
              >
                <h3>Turnover Rate Statistics</h3>
                <h5 style={{ marginLeft: -160, marginTop: 30 }}>(Month View)</h5>
                <button
                  style={{
                    margin: "30px",
                    background: "purple",
                    color: "#fff",
                    border: "none",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  Years
                </button>

              </div>
              <div>
                <MonthlyTurnoverChart />
              </div>
            </div>
          </div>

          <div
            style={{
              borderRadius: "10px",
              border: "1px solid #969191",
              minHeight: "446px",
              minWidth: "368px",
              margin: "10px",
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1
                style={{
                  marginLeft: "20px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Year View
              </h1>
              <button
                style={{
                  margin: "30px",
                  background: "purple",
                  color: "#fff",
                  border: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  cursor: "pointer",
                }}
              >
                Years
              </button>
            </div>
            <div
              style={{
                fontFamily: "Poppins, sans-serif",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "10px",
                border: "0.5px solid #969191",
                minHeight: "100px",
                minWidth: "345px",
                margin: "10px",
                boxShadow:
                  "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
              }}
            >
              <div style={{ margin: "10px", textAlign: "center" }}>
                <h1>98%</h1>
                <p style={{ fontSize: "small", textAlign: "center" }}>
                  Yearly Total Turnover
                </p>
              </div>
              <div style={{ margin: "10px", textAlign: "center" }}>
                <h1>17%</h1>
                <p style={{ fontSize: "small", textAlign: "center" }}>
                  Average Monthly turnover
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid #878585",
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
              backgroundColor: "#fff",
              minHeight: "200px",
              maxWidth: "350px",
              margin: "10px",
            }}
          >
            <div style={{ fontFamily: "Poppins, sans-serif", width: "350px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                  marginRight: "10px",
                }}
              >
                <h4>Turnover Rate</h4>
                <button
                  style={{
                    margin: "20px",
                    background: "purple",
                    color: "#fff",
                    border: "none",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    cursor: "pointer",
                  }}
                >
                  Years
                </button>
              </div>
            </div>
            <Chart
               width={'340px'}
               height={'200px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Turnover Type', 'Percentage'],
                ['Voluntary', 50],
                ['Involuntary', 30],
                ['Others', 20]
              ]}
            />
          </div>

          <div
            style={{
              borderRadius: "10px",
              border: "1px solid #969191",
              minHeight: "200px",
              maxWidth: "350px",
              margin: "10px",
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "350px",
              }}
            >
              <h4
                style={{
                  marginLeft: "20px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Reason For The Left
              </h4>
              <button
                style={{
                  margin: "20px",
                  background: "purple",
                  color: "#fff",
                  border: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  cursor: "pointer",
                }}
              >
                Years
              </button>
            </div>
            <Chart
              width={'340px'}
              height={'200px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Reason For The Left', 'Percentage'],
                ['Carrier Growth', 22],
                ['Relocation', 22],
                ['Family Reasons', 12],
                ['Health Issues', 18],
                ['Others', 26]
              ]}
            />
          </div>

          <div
            style={{
              borderRadius: "10px",
              border: "1px solid #969191",
              minHeight: "200px",
              maxWidth: "350px",
              margin: "10px",
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "350px",
              }}
            >
              <h4
                style={{
                  marginLeft: "20px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Turnover By Departmant
              </h4>
              <button
                style={{
                  margin: "20px",
                  background: "purple",
                  color: "#fff",
                  border: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  cursor: "pointer",
                }}
              >
                Years
              </button>
            </div>
            <Chart
             width={'340px'}
             height={'200px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Turnover By Departmant', 'Percentage'],
                ['HR', 12],
                ['Marketing', 22],
                ['Finance', 26],
                ['IT', 30],
                ['Resourcing', 10],
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}