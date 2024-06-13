import React, { useState,useEffect } from "react";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaCheck, FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./index.css";
import ModalDetails from "../ToDoLeave/Modal";
import { BiSolidDownArrow } from "react-icons/bi";
import CustomDropdown from "./CustomDropdown";
import BasicPie from "./PieChart";
import payslip from "components/payslip.png";
import axios from "axios";

export function SalarySectionPayslip() {
  const [open, setOpen] = useState(false);
  const [payslips, setPayslips] = useState([]);
  const [selectedPayslip, setSelectedPayslip] = useState(null);

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);
  };
  useEffect(() => {
    // Fetch payslips from an API
    axios.get("http://localhost:5000/salary/payslips")
      .then(response => {
        setPayslips(response.data);
      })
      .catch(error => {
        console.error("Error fetching payslips:", error);
      });
  }, []);

  const handlePayslipSelect = (payslip) => {
    setSelectedPayslip(payslip);
  };


  return (
    <div className="compensation_payslip">
      <div className="flex job-open-list-heading">
        <div className="job-open-list-title">
          <h3><img src={payslip} alt="" /> PAYSLIP</h3>
          <div className="leave__history__header">
            <p classname="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
          </div>
        </div>
      </div>

      <div className="second-half">
        <div>
          <h4>Payslip for the month of July - 2023</h4>
          <div className="box">
            <CustomDropdown
              options={[
                {
                  value: "option 1",
                  label: (
                    <div style={{ marginLeft: 20 }}>
                      <h4 style={{ marginTop: 0, marginBottom: 0 }}>
                        Payslip - July
                      </h4>
                      <span style={{ color: "gray" }}>Arthi Sorte - 300KB</span>
                    </div>
                  ),
                },
              ]}
            />
            <h4 style={{ marginTop: 20 }}>
              Graphical representation of salary
            </h4>
            <BasicPie />
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4> History of payslip</h4>
            <button className="view-btn" style={{backgroundColor:"#552d59"}}>View All</button>
          </div>
          <div
            className="box scroll-container"
            style={{ height: 325, overflowY: "scroll" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((ar, i) => (
              <div style={{ marginBottom: 11 }} key={i}>
                <CustomDropdown
                  options={[
                    {
                      value: "option 1",
                      label: (
                        <div style={{ marginLeft: 20 }}>
                          <h4 style={{ marginTop: 0, marginBottom: 0 }}>
                            Payslip - July
                          </h4>
                          <span style={{ color: "gray" }}>
                            Arthi Sorte - 300KB
                          </span>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
