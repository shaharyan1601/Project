import React, { useState, useEffect } from "react";
import bereavementImg from "../Picture1.png";
import LoanDetailsTable from "./LoanDetailsTable";
import { FaLongArrowAltRight } from "react-icons/fa";
import loandetails from "components/loandetails.png";
import arrow from "components/arrow.png";
import axios from "axios";

export default function LoanDetails({ handleRow,selectedRow }) {
  const [loanDetails, setLoanDetails] = useState(null);

  useEffect(() => {
    async function fetchLoanDetails() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/todo/allloan/view/${selectedRow}`);
        setLoanDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching loan details:", error);
      }
    }
    fetchLoanDetails();
  }, []);

  return (
    <div className="loan_details_section">
      <div style={{ position: "relative", display: "inline-block" }}>
        <h3>
          <img src={loandetails} alt="" /> LOAN DETAILS
        </h3>
        <span style={{ cursor: "pointer" }} onClick={handleRow}>
          <img
            src={arrow}
            alt=""
            style={{ marginLeft: 110, marginTop: -20 }}
          />
        </span>
      </div>

      <div className="loan_details_card">
        <div className="person_info_card">
          <div className="role">
            <span>
              {loanDetails && loanDetails.applicant} (
              {loanDetails && loanDetails.designation})
            </span>
          </div>
          <div className="person_info">
            <img src={bereavementImg} alt="" className="person_img" />
            <div className="person_details">
              <ul className="person_details_list border-right">
                <li className="person_details_list_item">
                  <div>LOAN APPROVED ON </div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.approvalDate}</div>
                </li>
                <li className="person_details_list_item">
                  <div>LOAN NUMBER </div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.loanNumber}</div>
                </li>
                <li className="person_details_list_item">
                  <div>LOAN TYPE </div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.loanType}</div>
                </li>
                <li className="person_details_list_item">
                  <div>ACTUAL LOAN AMOUNT</div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.loanAmount}INR</div>
                </li>
                <li className="person_details_list_item">
                  <div>INTEREST RATE </div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.interestRate}%</div>
                </li>
              </ul>
            </div>
            <div className="person_details">
              <ul className="person_details_list">
                <li className="person_details_list_item">
                  <div>PAYMENT METHOD </div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.paymentMethod}</div>
                </li>
                <li className="person_details_list_item">
                  <div>EMI FOR MONTH </div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.emiAmount}INR</div>
                </li>
                <li className="person_details_list_item">
                  <div>BALANCE AMOUNT</div>
                  <div>:</div>
                  <div>{loanDetails && loanDetails.balanceAmount}INR</div>
                </li>
                <li className="person_details_list_item">
                  <div>REPAYMENT DONE</div>
                  <div>:</div>
                  <div>
                    {loanDetails && loanDetails.repaymentDone}/
                    {loanDetails && loanDetails.totalRepayments}
                  </div>
                </li>
                <li className="person_details_list_item">
                  <div>STATUS </div>
                  <div>:</div>
                  <div>
                    {loanDetails &&
                      (loanDetails.status === "in progress"
                        ? "In Progress"
                        : "Completed")}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="person_info_card">
        <h4 className="loan_history_title" style={{ marginTop: "28px" }}>
          EMI Plan
        </h4>
        <LoanDetailsTable />
      </div>
    </div>
  );
}
