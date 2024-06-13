import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Button } from "react-bootstrap";
import "./index.css";
import { GoPlus } from "react-icons/go";
import NewModal from "components/ToDoTask/NewModal";
import UpdateModal from "components/ToDoTask/UpdateModal";;

export default function TrainingListMv() {
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      taskname: "MapBook",
      priority: "High",
      startDate: formatDate,
      deadline: formatDate,
      assignBy: "James",
      assignTo: [
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
      <div className="leave__history__container loan_list">
        <h2>TRAINING LIST</h2>
          <p className="faq-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
  
        <div className="loan_field">
          <div className="input-container">
            <button className="assign_task_btn" onClick={handleClickNewTask}>
              Assign New Task
            </button>
            <div className="icon-container">
              <GoPlus />
            </div>
          </div>
        </div>
        <div className="rounded-table-container" style={{marginTop:20}}>
        <table className="leave__history__table">
          <tr className="table__head">
            <th>S.NO.</th>
            <th>Task</th>
            <th>Priority</th>
            <th>Start Date</th>
            <th>Dealine</th>
            <th>Assign by</th>
            <th>Assign to</th>
            <th>Status</th>
            
          </tr>
          {tableData.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.taskname}</td>
              <td>{data.priority}</td>
              <td>{data.startDate}</td>
              <td>{data.deadline}</td>
              <td>{data.assignBy}</td>
              <td>
                <div className="stack-container">
                  {data.assignTo.map((datum, index) => (
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
              
            </tr>
          ))}
        </table>
        </div>
        
      </div>
      {openNewTask && (
        <NewModal
          open={openNewTask}
          handleClickListItem={handleClickNewTask}
          handleClose={handleCloseNewTask}
          title="Assign New Task"
        />
      )}
      {selectedRow !== null && (
        <UpdateModal
          open={openNewTask}
          handleClickListItem={handleClickNewTask}
          handleClose={handleCloseNewTask}
          title="Update The Task"
          selectedRow={selectedRow}
        />
      )}
    </>
  );
}
