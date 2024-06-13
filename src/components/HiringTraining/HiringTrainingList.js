import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Button } from "react-bootstrap";
import "./index.css";
import { GoPlus } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";

export default function HiringTrainingList() {
  const [openNewTask, setOpenNewTask] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClickNewTask = () => {
    setOpenNewTask(true);
  };

  const handleCloseNewTask = (newValue) => {
    setOpenNewTask(false);
    setSelectedRow(null);
  };

  const handleClickUpdateTask = (id) => {
    const getSelectedRow = tableData.find((data) => data.id === id);
    setSelectedRow(getSelectedRow);
    setOpenNewTask(true);
  };

  const currentDate = new Date();
  const day = ("0" + currentDate.getDate()).slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const year = currentDate.getFullYear();

  const formatDate = `${year}-${month}-${day}`;
  const tableData = [
    {
      id: 1,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Active",
    },
    {
      id: 2,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Active",
    },
    {
      id: 3,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Pending",
    },
    {
      id: 4,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Active",
    },
    {
      id: 5,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Pending",
    },
    {
      id: 6,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Pending",
    },
    {
      id: 7,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Active",
    },
    {
      id: 8,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Completed",
    },
    {
      id: 9,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Completed",
    },
    {
      id: 10,
      trainingname: "MapBook",
      from: "21-Sep-2023",
      to: "30-Sep-2023",
      trainer: "James",
      team: [
        {
          id: 1,
          img: "/images/Picture1.png",
        },
        {
          id: 2,
          img: "/images/Picture1.png",
        },
        {
          id: 3,
          img: "/images/Picture1.png",
        },
        {
          id: 4,
          img: "/images/Picture1.png",
        },
      ],
      status: "Active",
    },
  ];

  return (
    <>
      <div className="leave__history__container loan_list flex">
        <div>
          <FaRegFileAlt size={25} />
        </div>
        <div className="training-list-content">
          <h3>TRAINING LIST</h3>
          <div className="leave__history__header">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
          </div>
          <div className="loan_field">
            <div className="input-container">
              <button className="assign_task_btn" onClick={handleClickNewTask}>
                Assign New Training
              </button>
              <div className="icon-container">
                <GoPlus />
              </div>
            </div>
          </div>
          <table className="leave__history__table">
            <tr className="table__head">
              <th>S.NO.</th>
              <th>Training Name</th>
              <th>From</th>
              <th>To</th>
              <th>Trainer</th>
              <th>Team</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {tableData.map((data) => (
              <tr>
                <td>{data.id}</td>
                <td>{data.trainingname}</td>
                <td>{data.from}</td>
                <td>{data.to}</td>
                <td>{data.trainer}</td>
                <td>
                  <div className="stack-container">
                    {data.team.map((datum, index) => (
                      <img
                        src={`${datum.img}`}
                        alt=""
                        className="stack-img stacked-img"
                        style={{ "--index": index }}
                      />
                    ))}
                  </div>
                </td>
                <td
                  className={
                    (data.status.toLowerCase() === "active" && "blue") ||
                    (data.status.toLowerCase() === "completed" && "green") ||
                    (data.status.toLowerCase() === "pending" && "yellow")
                  }
                >
                  {data.status}
                </td>
                <td>
                  <div className="action_btns">
                    <Button
                      variant="info"
                      className="action_btn_each "
                      onClick={() => handleClickUpdateTask(data.id)}
                    >
                      <span className="action_btn_icon_blue action_btn_icon">
                        <BsPencil />
                      </span>{" "}
                      Update
                    </Button>
                    <div className="separator">|</div>
                    <Button
                      variant="danger"
                      className="action_btn_each red_btn"
                    >
                      <span className="action_btn_red action_btn_icon ">
                        <RxCross1 />
                      </span>{" "}
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
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
        </div>
      </div>
    </>
  );
}
