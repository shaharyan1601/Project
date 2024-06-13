import React, { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Button } from "react-bootstrap";
import "./index.css";
import { GoPlus } from "react-icons/go";
import tasklist from "components/tasklist.png";
import axios from "axios";

export default function ToDoTaskEV() {
  const [openNewTask, setOpenNewTask] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/task`);
        setTaskData(response.data.data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClickNewTask = () => {
    setOpenNewTask(true);
  };

  const handleCloseNewTask = (newValue) => {
    setOpenNewTask(false);
    setSelectedRow(null);
  };

  const handleClickUpdateTask = (id) => {
    const getSelectedRow = taskData.find((data) => data.id === id);
    setSelectedRow(getSelectedRow);
    setOpenNewTask(true);
  };

  const currentDate = new Date();
  const day = ("0" + currentDate.getDate()).slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const year = currentDate.getFullYear();

  const formatDate = `${year}-${month}-${day}`;

  return (
  
      <div className="leave__history__container loan_list">
        <h3><img src={tasklist} alt="" /> TASK LIST</h3>
        <div className="leave__history__header">
          <p className="faq-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
        <div className="rounded-table-container">
        <table className="leave__history__table"  >
          <tr className="table__head" >
            <th>Task Name</th>
            <th>Client Name</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assign by</th>
            <th>Team</th>
          </tr>
          {taskData.map((data) => (
            <tr>
              <td>{data.taskname}</td>
              <td>{data.clientname}</td>
              <td>{data.deadline}</td>
              <td>{data.priority}</td>
              <td
                className={
                  (data.status.toLowerCase() === "ongoing" && "blue") ||
                  (data.status.toLowerCase() === "completed" && "green") ||
                  (data.status.toLowerCase() === "pending" && "yellow")
                }
              >
                {data.status}
              </td>
              <td>{data.assignBy}</td>
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
            </tr>
          ))}
        </table>
      </div>
      <div className="center">
        <div className="pagination">
          <a href="#" className="active_page">
            1
          </a>
          <a href="#" className="active">
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
  );
}
