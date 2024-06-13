import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaLongArrowAltRight, FaRegFileAlt } from "react-icons/fa";
import logo from "./Picture1.png";
import loan from "./loan.png";
import arrows from "components/arrows.png"

export default function SalarySectionLoan({ handleIdx }) {
  const [showJobList, setShowJobList] = useState(false);

  const handleJobOpening = () => {
    setShowJobList(true);
  };

  const cards = [
    {
      id: 1,
      title: "Home Loan",
      subTitle: "Rate of interest",
      btn: "Apply",
      percentage: "0.3%",
    },
    {
      id: 2,
      title: "Home Loan",
      subTitle: "Rate of interest",
      btn: "Apply",
      percentage: "0.3%",
    },
    {
      id: 3,
      title: "Home Loan",
      subTitle: "Rate of interest",
      btn: "Apply",
      percentage: "0.3%",
    },
    {
      id: 4,
      title: "Home Loan",
      subTitle: "Rate of interest",
      btn: "Apply",
      percentage: "0.3%",
    },
  ];

  return (
    <div className="add-job-page flex">
      
      <div className="add-job-open-content">
        <div style={{ position: "relative", display: "inline-block" }}>
          <h3 className="section-title" style={{ marginTop: 0 }}>
           <img src={loan} alt="" /> AVAILABLE LOAN OFFERS
          </h3>
          <span style={{ cursor: "pointer" }}>
            {/* <FaLongArrowAltRight
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                transform: "scaleX(3) scaleY(2.5)",
                height: "1vh",
              }}
              size={20}
            /> */}
            <img src={arrows} alt="" style={{marginLeft:230,marginTop:-20}} />
          </span>
        </div>
        <div className="leave__history__header">
          <p className="faq-pargraph"style={{marginLeft:30,marginTop:-11}}>
            Based on your profile, you are eligible for the following loans.
          </p>
        </div>
        <div className="home-loan-cards">
          {cards.map((card) => (
            <div className="home-loan-card" key={card.id}>
              <div className="first-obj">
                <img src={logo} alt="img" />
                <div>
                  <h3>{card.title}</h3>
                  <p className="gray-color">{card.subTitle}</p>
                </div>
              </div>
              <div className="second-obj">
                <div>
                  <h3>{card.percentage}</h3>
                  <p className="gray-color">{card.subTitle}</p>
                </div>
                <button onClick={handleIdx}>{card.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
