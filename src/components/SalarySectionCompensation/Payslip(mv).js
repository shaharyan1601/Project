import React, { useState } from 'react'
import 'index.css'
import { FaShare, FaLongArrowAltRight, FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { TfiWallet } from "react-icons/tfi";
import { SlEnvolopeLetter } from "react-icons/sl";
import BasicMenu from "./Menu";
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import AddEmployee from './AddEmployee';
import SharePayslip from './SharePayslip';
import ps from "components/ps.png";

function PayrollMv() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [addClicked, setAddClicked] = useState(false);
    const [shareClicked, setShareClicked] = useState(false);
    const menuOpen = Boolean(anchorEl);

    const tableData = [
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        },
        {
            id:1,
            name: "Anjali Narwade",
            employeeID: "API/HR/0011",
            paidHours: 178,
            grossPay: "18,234",
            statutoryPay: 1800,
            deduction: -1178,
            netpay: "22,654",
            status: "Paid",
            payslip: "View",
            Action: "..."
        }
    ]

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  return (
    <div className='compensation_list'>
        {addClicked && <AddEmployee open={addClicked}
          handleClickListItem={()=>setAddClicked(true)}
          handleClose={()=>setAddClicked(false)}
          title="Add New Employee"/>}
          {shareClicked && <SharePayslip open={shareClicked}
          handleClickListItem={()=>setShareClicked(true)}
          handleClose={()=>setShareClicked(false)}
          title="Share The Payslips"/>}
        
        <div className="flex job-open-list-heading">
        
        <div className="payroll-content">
          <div style={{ position: "relative", display: "inline-block" }}>
            <h3 className="section-title"><img src={ps} alt="" /> PaySlip</h3>
            {/* <span style={{ cursor: "pointer" }}>
              <FaLongArrowAltRight
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  transform: "scaleX(3) scaleY(2.5)",
                  height: "1vh",
                }}
                size={20}
              />
            </span> */}
          </div>
          <p className="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>
      <h3 className='section-title'>EMPLOYEE PAYROLL</h3>
      <div className="payroll__options">
        <div className="payroll_search_container">
        <span className='searchIcon'><CiSearch /></span>
        <input type="text" placeholder='Enter Employee Name'/>
        </div>
        <div className="payroll__addShare">
            <button className='shareBtn' onClick={()=>setShareClicked(true)}><FaShare /> Share</button>
        </div>
      </div>
      <div className="rounded-table-container" style={{marginTop:20}}>  
        <table className="compensation-table " style={{marginTop:0}}>
        <div className="table_scroll">
            <tr className="table__head" style={{backgroundColor:"#552d59"}}>
            <th>Name</th>
            <th>employee ID</th>
            <th>Paid Hours</th>
            <th>Gross Pay</th>
            <th>Statutory Pay</th>
            <th>Deductions</th>
            <th>Net Pay</th>
            <th>Status</th>
            <th>Payslip</th>
            </tr>
            {tableData.map((data) => (
            <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.employeeID}</td>
                <td>{data.paidHours}</td>
                <td>₹ {data.grossPay}</td>
                <td> {data.statutoryPay}</td>
                <td className='setRed'>₹ {data.deduction}</td>
                <td className='setGreen'>₹ {data.netpay}</td>
                <td><span className='setUnderBox'>{data.status}</span></td>
                <td> <Link className='payslip_link'>{data.payslip}</Link></td>
                
            </tr>
            ))}
             </div>
        </table>
       
        </div>
    </div>
  )
}

export default PayrollMv