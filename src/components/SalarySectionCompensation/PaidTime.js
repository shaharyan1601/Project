import React,{useState} from "react";
import payslip from "components/payslip.png";
import './PaidTime.css';
import { Button } from "react-bootstrap";
import RequestModal from "pages/Home/RequestModal";

export default function PaidTime() {

  const [OpenRequestOff, setOpenRequestOff] = useState(false);

  const currentDate = new Date();
  const day = ("0" + currentDate.getDate()).slice(-2);
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  const year = currentDate.getFullYear();

  const formatDate = `${year}-${month}-${day}`;
  const tableData=[
    {
        empName: "Anjali",
        policy: "Full Time", 
        allowance:"09",
        used:"02",
        available: "07",
    },

    
    

  ]
  const handleClickRequestOff = () => {
    setOpenRequestOff(true);
  };

  const handleCloseRequestOff = (newValue) => {
    setOpenRequestOff(false);
  };


return (
    <div className="leave__history__container loan_list">
        
      <h3> <img src={payslip} alt="" /> PAID TIME OFF BALANCE</h3>
      <div className="leave__history__header">
        <p className="faq-paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
      <div className="rect_container">
        <div className="rect_right_box">
          <p style={{justifyContent:"center"}}>Sick Leaves</p>
            

        </div>
      </div>
      <div className="tableContainer" style={{marginTop:"14px"}}>
      <table className="tablePaid">
      <tr className="tablePaid" >
            <th>Employee Name</th>
            <th>Time off policy</th>
            <th>Allowance</th>
            <th>Used</th>
            <th>Available</th>
        </tr>
        {tableData.map((data) =>(
            <tr>
                <td>{data.empName}</td>
                <td>{data.policy}</td>
                <td>{data.allowance}</td>
                <td>{data.used}</td>
                <td>{data.available}</td>
            </tr>

        ))}


      </table>
      </div>
      <div className="res_btns">
                <Button
                  autoFocus
                  onClick={handleClickRequestOff}
                  className="event_btn"
                >
                  Apply for paid time off
                </Button>

            </div>
            {OpenRequestOff && (
            <RequestModal
              open={OpenRequestOff}
              handleClickListItem={handleClickRequestOff}
              handleClose={handleCloseRequestOff}
              title="Paid Time Off"
            />
          )}
   
    </div>
)
}