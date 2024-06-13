import React, { useState } from "react";
import LoanList from "./LoanList";
import { FaCheck } from "react-icons/fa6";
import { LiaShareAltSolid } from "react-icons/lia";
import { FcCancel } from "react-icons/fc";
import ApprovalRejectionModal from './Loan_approval_rejection'


const loan_request_details = [
  {
    label: "Name",
    value: "Anjali Narwade",
  },
  {
    label: "Loan Amount",
    value: "2,50,000INR",
  },
  {
    label: "Monthly Income",
    value: "30,000INR",
  },
  {
    label: "Tenure",
    value: "18 Monthly",
  },
  {
    label: "application ID",
    value: "PL1000123",
  },
];

const load_details_2 = [
  {
    label: "User ID",
    value: "US1000123",
  },
  {
    label: "Employment Type",
    value: "Full Time",
  },
  {
    label: "VERIFIED",
    value: "PAN CARD DINSHDHULL",
  },
  {
    label: "VERIFIED",
    value: "AADHAR 9841 2231 4556",
  },
  {
    label: "Contact Details",
    value: "anjalinarwade@axzorgroup.com",
  },
  {
    label: "Current Address",
    value: "27/29 Srivaaso Nilayam, Nagole",
  },
];

export default function LoanRequest() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");


  const handleModalApproval = () => {
    setModalType('APPROVAL');
    setModalOpen(true)
  }
  const handleModalRejection = () => {
    setModalType('REJECTION');
    setModalOpen(true)
  }

  return (
    <div className="leave__history__container loan_list">
      <ApprovalRejectionModal open={modalOpen} handleClose={() => setModalOpen(false)} type={modalType} />
      <div className="loan_request_parent_container">
        <div className="loan_deatils_1 border_bottom">
          <img
            src="/static/media/Picture1.9dc6639d4197cf99ffe7.png"
            alt="demo image"
          />
          {loan_request_details.map((item, index) => (
            <div key={`${index}-loan-details`}>
              <p>{item.label}</p>
              <p className="bold">{item.value}</p>
            </div>
          ))}
          <p>2 days ago</p>
        </div>

        <div className="loan_details_grid ">
          <div
            className="children-1"
            style={{
              borderRight: "2px solid grey",
            }}
          >
            {load_details_2.map((item, index) => (
              <div key={`${index}-loan-details`} className="deai">
                <p>{item.label}</p>
                <p className="bold">{item.value}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              gap: 20,
              flexDirection: "column",
              paddingLeft: "30px",
            }}
          >
            <div>
              <p>Elgibility Loan Amount</p>
              <p className="bold">5,00,000 INR</p>
            </div>
            <div>
              <p>Tenure</p>
              <p className="bold">18 Months</p>
            </div>
            <div style={{ display: "flex", gap: 40 }}>
              <div>
                <p>Tenure</p>
                <p className="bold">18 Months</p>
              </div>
              <div>
                <p>Fees</p>
                <p className="bold">1080 INR</p>
              </div>
              <div>
                <p>EMI </p>
                <p className="bold">8000 INR</p>
              </div>
            </div>
            <div>
              <p>Documents</p>
              <p className="m-0-p-0">Preview</p>
              <p className="m-0-p-0">DownLoad ALL</p>
            </div>

            <div style={{ display: "flex", gap: 20 }}>
              <button className="button" onClick={handleModalApproval}>
                <FaCheck size={24} />
                Approve
              </button>
              <button className="button">
                <LiaShareAltSolid size={24} />
                Follow Up
              </button>
              <button className="button" onClick={handleModalRejection}>
                <FcCancel size={24} />
                Reject
              </button>
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center"  }}>
              <input type="checkbox" id="terms" className="m-0-p-0" />
              <p style={{ maxWidth : 500}}>
                Loan has beed approved for the amount of ruppes 3 lakhs with the
                tenure of 48 months
              </p>
            </div>

            <button className="btn" style={{marginTop : 0}}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
