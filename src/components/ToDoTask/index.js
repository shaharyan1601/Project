import React, { useState, useEffect, } from "react";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { Button } from "react-bootstrap";
import "./index.css";
import { GoPlus } from "react-icons/go";
import NewModal from "./NewModal";
import UpdateModal from "./UpdateModal";
import tasklist from "components/tasklist.png";
import axios from 'axios';

export default function ToDoTask() {
  const [openNewTask, setOpenNewTask] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}todo/teamtask`);
        setTableData(response.data.data);
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTaskData();
  }, []);

  const handleClickNewTask = () => {
    setOpenNewTask(true);
  };

  const handleCloseNewTask = () => {
    setOpenNewTask(false);
    setSelectedRow(null);
  };

  const handleClickUpdateTask = (id) => {
    const getSelectedRow = tableData.find((data) => data.id === id);
    setSelectedRow(getSelectedRow);
    setOpenNewTask(true);
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_NODE_URL}todo/task/delete/${id}`);
      setTableData(tableData.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const renderTableRows = () => {
    return tableData.map((data) => (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.taskname}</td>
        <td>{data.priority}</td>
        <td>{data.startDate}</td>
        <td>{data.deadline}</td>
        <td>{data.assignby}</td>
        <td>
          <div className="stack-container">
            {data.assignTo.map((datum, index) => (
              <img
                key={index}
                src={`${datum.img}`}
                alt=""
                className="stack-img stacked-img"
                style={{ "--index": index }}
              />
            ))}
          </div>
        </td>
        <td className={
          (data.status.toLowerCase() === "active" && "blue") ||
          (data.status.toLowerCase() === "completed" && "green") ||
          (data.status.toLowerCase() === "pending" && "yellow")
        }>
          {data.status}
        </td>
        <td>
          <div className="action_btns">
            <Button
              variant="danger"
              className="action_btn_each red_btn"
              onClick={() => handleDeleteTask(data.id)}
            >
              <span className="action_btn_red action_btn_icon ">
                <RxCross1 />
              </span>{" "}
              Delete
            </Button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="leave__history__container loan_list">
        <h3><img src={tasklist} alt="" /> TASK LIST</h3>
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
        <div className="rounded-table-container" style={{ marginTop: 20 }}>
          <table className="leave__history__table">
            <thead>
              <tr className="table__head">
                <th>S.NO.</th>
                <th>Task</th>
                <th>Priority</th>
                <th>Start Date</th>
                <th>Dealine</th>
                <th>Assign by</th>
                <th>Assign to</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        </div>
        <button className="submit__btn">Next</button>
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
