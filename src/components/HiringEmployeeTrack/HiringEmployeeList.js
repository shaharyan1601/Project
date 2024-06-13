import Reac, { useState, useEffect } from "react";
import "./index.css";
import { FaCheck, FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Button } from "react-bootstrap";
import list from "components/list.png";
import axios from "axios";

export default function HiringEmployeeList() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    // Fetch employee list from backend when component mounts
    const fetchEmployeeList = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/hiring/applicant_tracking_system/employee_list`);
        setEmployeeList(response.data.data);
      } catch (error) {
        console.error("Error fetching employee list:", error);
      }
    };

    fetchEmployeeList();
  }, []);

  const handleApprove = async (employeeId) => {
    try {
      // Send a PUT request to update employee data with approval
      await axios.put(`/applicant_tracking_system/employee_list/employee_data/update/${employeeId}`, { status: "approved" });
      // Assuming status field is updated in the backend
      // You may need to adjust this according to your backend implementation
      // After updating, you can fetch the updated employee list again if needed
    } catch (error) {
      console.error("Error approving employee:", error);
    }
  };

  const handleReject = async (employeeId) => {
    try {
      // Send a PUT request to update employee data with rejection
      await axios.put(`/applicant_tracking_system/employee_list/employee_data/update/${employeeId}`, { status: "rejected" });
      // Similar to approval, you can fetch the updated employee list again if needed
    } catch (error) {
      console.error("Error rejecting employee:", error);
    }
  };
  return (
    <div className="hiring-employee-list">
      <div className="flex">
        <div className="employee-list-title">
          <h3><img src={list} alt="" /> EMPLOYEE LIST</h3>
          <p  className="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>
      <div className="rounded-table-container">
      <table className="leave__history__table">
        <tr className="table__head">
          <th>S.NO.</th>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th>Action</th>
        </tr>
        {employeeList.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.employeeId}</td>
            <td>{data.employeeName}</td>
            <td>{data.designation}</td>
            <td>
              <div className="action_btns">
                <Button variant="success" className="action_btn_each" onClick={() => handleApprove(data.id)}>
                  <span className="action_btn_green action_btn_icon">
                    <FaCheck />
                  </span>{" "}
                  Approve
                </Button>
                <div className="separator">|</div>
                <Button 
                    variant="danger" 
                    className="action_btn_each red_btn"
                    onClick={() => handleReject(data.id)}
                    >
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
    </div>
  );
}
