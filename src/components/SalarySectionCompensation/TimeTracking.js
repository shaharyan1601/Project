import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaLongArrowAltRight, FaRegFileAlt } from "react-icons/fa";
import "./timeTracking.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Button } from "react-bootstrap";
import timesheet from "components/timesheet.png";
import EditTimeModal from './EditTimeModal'
import { purple } from "@mui/material/colors";
export function TimeTracking() {
  
  const [openEditModal , setEditModal] = useState(false)

  const tableData = [
    {
      id: 1,
      detail: "Employee Name:",
      time: "0.25",
      for: ["for 15min"],
    },
    {
      id: 2,
      detail: "Employee ID:",
      time: "0.5",
      for: ["for 30min"],
    },

    {
      id: 3,
      detail: "Department:",
      time: "0.5",
      for: ["for 30min"],
    },
    {
      id: 4,
      detail: "Reporting To:",
      time: "0.5",
      for: ["for 30min"],
    },
    {
      id: 5,
      detail: "Designation:",
      time: "0.00",
      for: ["for Leave/Holiday"],
    },
    {
      id: 4,
      detail: "Location:",
      time: "Breaks",
      for: ["Breafast - 15min", "Lunch - 15min", "Tea - 15min"],
    },
  ];

  const timeData = [
    {
      id: 1,
      name: "MapBook",
      data: [
        {
          heading: "24 July",
          value: "4:00",
          subValue: "Landing Page",
        },
        {
          heading: "25 July",
          value: "",
        },
        {
          heading: "26 July",
          value: "",
        },
        {
          heading: "27 July",
          value: "4:00",
        },
        {
          heading: "28 July",
          value: "7:00",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "15:00",
    },
    {
      id: 2,
      name: "Topgear",
      data: [
        {
          heading: "24 July",
          value: "",
        },
        {
          heading: "25 July",
          value: "4:00",
        },
        {
          heading: "26 July",
          value: "",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "4:00",
    },
    {
      id: 3,
      name: "Axzora IT",
      data: [
        {
          heading: "24 July",
          value: "3:00",
        },
        {
          heading: "25 July",
          value: "",
        },
        {
          heading: "26 July",
          value: "3.00",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "6:00",
    },
    {
      id: 3,
      name: "Axzora IT",
      data: [
        {
          heading: "24 July",
          value: "3:00",
        },
        {
          heading: "25 July",
          value: "",
        },
        {
          heading: "26 July",
          value: "3.00",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "6:00",
    },
    {
      id: 4,
      name: "Tikka Masala",
      data: [
        {
          heading: "24 July",
          value: "",
        },
        {
          heading: "25 July",
          value: "3:00",
        },
        {
          heading: "26 July",
          value: "",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "3:00",
    },
    {
      id: 5,
      name: "Shrimati",
      data: [
        {
          heading: "24 July",
          value: "",
        },
        {
          heading: "25 July",
          value: "",
        },
        {
          heading: "26 July",
          value: "",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "0:00",
    },
    {
      id: 6,
      name: "Leave/Holiday",
      data: [
        {
          heading: "24 July",
          value: "",
        },
        {
          heading: "25 July",
          value: "",
        },
        {
          heading: "26 July",
          value: "0.00",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "0:00",
    },
    {
      id: 7,
      name: "Break",
      data: [
        {
          heading: "24 July",
          value: "1:00",
        },
        {
          heading: "25 July",
          value: "1:00",
        },
        {
          heading: "26 July",
          value: "",
        },
        {
          heading: "27 July",
          value: "1:00",
        },
        {
          heading: "28 July",
          value: "1:00",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "4:00",
    },
    {
      id: 8,
      name: "+Add project",
      data: [
        {
          heading: "24 July",
          value: "",
        },
        {
          heading: "25 July",
          value: "",
        },
        {
          heading: "26 July",
          value: "",
        },
        {
          heading: "27 July",
          value: "",
        },
        {
          heading: "28 July",
          value: "",
        },
        {
          heading: "29 July",
          value: "",
        },
        {
          heading: "30 July",
          value: "",
        },
      ],
      total: "",
    },
    {
      id: 9,
      name: "Daily Total",
      data: [
        {
          heading: "24 July",
          value: "8.00",
        },
        {
          heading: "25 July",
          value: "8.00",
        },
        {
          heading: "26 July",
          value: "8.00",
        },
        {
          heading: "27 July",
          value: "8.00",
        },
        {
          heading: "28 July",
          value: "8.00",
        },
        {
          heading: "29 July",
          value: "8.00",
        },
        {
          heading: "30 July",
          value: "8.00",
        },
      ],
      total: "32.00",
    },
  ];

  const onEditTime = () => {
    setEditModal(true)
  }

  return (
    <div className="time-sheet-list" >
      <div className="flex job-open-list-heading">

        <div className="time-tracking-content">
          <div style={{ position: "relative", display: "inline-block" }}>
            <h3 className="section-title"> <img src={timesheet} alt="" /> TIME SHEET</h3>
            <span style={{ cursor: "pointer" }}>
            </span>
          </div>
          <p classname="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>
      <div className="loan_field">
        <div className="input-container" style={{ marginRight: 20 }}>
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Enter Employee ID"
          />
        </div>
        <div className="input-container">
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Enter Employee Name"
          />
        </div>
        <div className="serach_icon_div">
          <CiSearch className="serach_icon" size={20} color="white" />
        </div>
      </div>
      <div className="rounded-table-container" style={{ marginTop: 20 }}>
        <table className="time-tracking-table" style={{ margin: 0 }}>
          <thead>
            <tr className="table__head">
              <th
                style={{ borderRight: "1px solid gray", width: "50%" }}
                colSpan="2"
              >
                Enter your Details
              </th>
              <th colSpan="2">Timings</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td style={{ borderRight: "1px solid gray" }}>{item.detail}</td>
                <td style={{ borderRight: "1px solid gray" }}></td>
                <td style={{ borderRight: "1px solid gray" }}>{item.time}</td>
                <td>
                  {item.for.map((eachFor) => (
                    <div>{eachFor}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="time-track-field">
        <div className="custom-select-container">
          <div className="custom-select-wrapper">
            <div className="custom-select">
              <select id="customSelect" className="custom-select ">
                <option value="">Teammates</option>
                <option value="option1">2</option>
                <option value="option2">3</option>
              </select>
              <div className="with_label no_background">
                <BiSolidDownArrow className="icon"style={{color:"black"}} />
              </div>
            </div>
          </div>
        </div>
        <div className="custom-select-container">
          <div className="custom-select-wrapper">
            <div className="custom-select">
              <select id="customSelect" className="custom-select "style={{color:purple}}>
                <option value="">This Week</option>
                <option value="option1">2</option>
                <option value="option2">3</option>
              </select>
              <div className="with_label no_background">
                <BiSolidDownArrow className="icon"style={{color:"black"}} />
              </div>
            </div>
          </div>
        </div>
        <div className="btns">
          <button>
            <IoIosArrowBack size={20} />
          </button>
          <button>
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
      <div className="rounded-table-container">
        <table className="time-log-table">
          <thead>
            <tr>
              <th>Projects</th>
              <th>
                <div>24 July</div>
                <div>(Mon)</div>
              </th>
              <th>
                <div>25 July</div>
                <div>(Tue)</div>
              </th>
              <th>
                <div>26 July</div>
                <div>(Wed)</div>
              </th>
              <th>
                <div>27 July</div>
                <div>(Thu)</div>
              </th>
              <th>
                <div>28 July</div>
                <div>(Fri)</div>
              </th>
              <th>
                <div>29 July</div>
                <div>(Sat)</div>
              </th>
              <th>
                <div>30 July</div>
                <div>(Sun)</div>
              </th>
              <th>
                <div>Weekly</div>
                <div>Total</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {timeData.map((data) => (
              <tr>
                <td style={{ borderRight: "1px solid gray" }}>{data.name}</td>
                {data.data.map((d) => (
                  <td className="center dynamic-data" style={{cursor : 'pointer'}} onClick={onEditTime}>
                    {d.value.length > 0 ? (
                      <>
                        <span className="add-border">{d.value}</span>
                        {d.subValue ? <div>{d.subValue}</div> : null}
                      </>
                    ) : (
                      <>{d.value}</>
                    )}
                  </td>
                ))}

                <td className="center">{data.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="time-log-btns" style={{ padding: "0px 40px 20px" }}>
        <Button onClick={() => {}} className="second_btn">
          Save
        </Button>
        <Button autoFocus className="first_btn">
          Send for Approval
        </Button>
      </div>
      <EditTimeModal
        handleClose={() => setEditModal(false)}
        open={openEditModal}
      />
    </div>
  );
}
