import React from "react";
import Group from "components/Group.png";
import { Chart } from 'react-google-charts';

export default function NetPromoter() {
return (
    <div className="leave__history__container loan_list">
        
      <h3> <img src={Group} alt="" /> COMPANY NET PROMOTER SCORE SURVEY ANALYSIS</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div className="App">
      <>
        <div
          style={{
            borderRadius: 10,
            border: "1px solid #878585",
            minHeight: 148,
            maxWidth: 1200,
            boxShadow:
              "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
            backgroundColor: "#fff",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <div>
              <h2
                style={{
                  marginLeft: 20,
                  fontFamily: '"Poppins", sans-serif',
                  color: "purple",
                }}
              >
                Net Promoter Score
              </h2>
              <h3
                style={{ marginLeft: 20, fontFamily: '"Poppins", sans-serif' }}
              >
                = Promoters% - Detractors%
              </h3>
            </div>
            <img src="/Group 1211.png" style={{ margin: 20, height: 100 }} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: 10,
              border: "1px solid #878585",
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25),0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
              backgroundColor: "#fff",
              minHeight: 446,
              minWidth: 722,
              marginRight: 10,
            }}
          >
            {" "}
            <div style={{ fontFamily: '"Poppins", sans-serif' }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: 20,
                  marginRight: 10,
                }}
              >
                <h2>NPS Statistics</h2>
                <button
                  style={{
                    margin: 30,
                    background: "purple",
                    color: "#fff",
                    border: "none",
                    paddingLeft: 20,
                    paddingRight: 20,
                    cursor: "pointer",
                  }}
                >
                  Years
                </button>
              </div>
            </div>
            <Chart
              width={'100%'}
              height={'350px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Year', 'NPS'],
                ['2016', 30],
                ['2017', 40],
                ['2018', 60],
                ['2019', 50],
                ['2020', 70]
              ]}
              options={{
                curveType: 'function',
                legend: { position: 'bottom' }
              }}
            />
          </div>
          <div
            style={{
              borderRadius: 10,
              border: "1px solid #969191",
              minHeight: 446,
              minWidth: 368,
              marginLeft: 10,
              boxShadow:
                "0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.25), 0px 2.209px 2.209px 0px rgba(0, 0, 0, 0.1) inset",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2
                style={{ marginLeft: 20, fontFamily: '"Poppins", sans-serif' }}
              >
                Year View
              </h2>
              <button
                style={{
                  margin: 30,
                  background: "purple",
                  color: "#fff",
                  border: "none",
                  paddingLeft: 20,
                  paddingRight: 20,
                  cursor: "pointer",
                }}
              >
                Years
              </button>
            </div>
            <Chart
              width={'100%'}
              height={'350px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
              ]}
              options={{
                is3D: true,
              }}
            />
          </div>
        </div>
      </>
    </div>
    </div>
)
}

