import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaCheck, FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Overtime.css";
import ModalDetails from "../ToDoLeave/Modal";
import { tableData } from "./constants";
import Clock from "components/Clock.png";

export function Overtime() {
    const [open, setOpen] = useState(false);
    const handleClickListItem = () => {
      setOpen(true);
    };
  
    const handleClose = (newValue) => {
      setOpen(false);
    }; 

    return (
        <div className="compensation_list" style={{marginLeft: "15vw"}}>
          <div className="flex job-open-list-heading">
            <div className="job-open-list-title">
              <h3><img src={Clock} alt="" /> OVERTIME INFO</h3>
              <div className="leave__history__header">
                <p className="faq-paragraph"style={{marginLeft:30}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  voluptas dolor saepe necessitatibus deserunt!
                </p>
              </div>
            </div>
          </div>
    
          <div className="loan_field">
            <div className="input-container" style={{ marginRight: 20 }}>
              <input
                className="loan_search"
                date="text"
                name=""
                id=""
                placeholder="Search by date"
              />
              <div className="loan-icon-container">
                <CiSearch className="icon" />
              </div>
            </div>
            <div className="input-container">
              <input
                className="loan_search"
                date="text"
                name=""
                id=""
                placeholder="Search by leave type"
              />
              <div className="loan-icon-container">
                <CiSearch className="icon" />
              </div>
            </div>
          </div>

        <div className="rounded-table-container" style={{marginTop:"3rem"}}>
          <table className="leave__history__table" >
            <tr className="table__head">
              <th>S.NO.</th>
              <th>Eligible OT</th>
              <th>Applied OT</th>
              <th>Status</th>
            </tr>
            {tableData.map((data) => (
              <tr onClick={() => handleClickListItem()} key={data.id}>
                <td>{data.id}</td>
                <td>{data.eligibleOT}</td>
                <td>{data.appliedOT}</td>
               
                <td>
                  <div className="action_btns">
                    <Button variant="success" className="action_btn_each">
                      <span className="action_btn_green action_btn_icon">
                        <FaCheck />
                      </span>{" "}
                      Approve
                    </Button>
                    <div className="separator">|</div>
                    <Button variant="danger" className="action_btn_each red_btn">
                      <span className="action_btn_red action_btn_icon ">
                        <RxCross1 />
                      </span>{" "}
                      Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
          </div>
          <div class="center">
            <div class="pagination">
              <a href="#" className="active_page">
                1
              </a>
              <a href="#" class="active">
                2
              </a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#" className="more_page">
                ....
              </a>
            </div>
          </div>
          <ModalDetails
            open={open}
            handleClickListItem={handleClickListItem}
            handleClose={handleClose}
            title="Paid Time-Off Request"
          />
        </div>
      );
    }