import React, { useState,useEffect } from 'react'
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
import payslip from "components/payslip.png";
import axios from 'axios';

function PayrollSection() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [addClicked, setAddClicked] = useState(false);
    const [shareClicked, setShareClicked] = useState(false);
    const [payrollData, setPayrollData] = useState([]);
    
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

    const fetchPayrollData = async (date) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/salary/payslip/${date}`);
            console.log(response.data);


            const postResponse = await axios.post(`${process.env.REACT_APP_NODE_URL}/salary/add_payslip`, {
                emp_name: 'Employee Name',
                emp_id: 'Employee ID',
                paid_hours:'Paid Hours',
                grosspay: 'Gross Pay',
                statutoryPay:'Statutory Pay',
                deduction:'Deduction',
                netpay: 'Net Pay',
                status: 'Status',
                File:'',
                // Add other required fields here
            });
        
            console.log(postResponse.data); // Log the response for now
        } catch (error) {
            console.error('Error fetching payroll data:', error);
        }
    };

    useEffect(() => {
        fetchPayrollData();
    }, []); 
    

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
            <h3 className="section-title"><img src={payslip} alt="" /> PAYROLL</h3>
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
            {/* <img src={arrows} alt=""style={{marginLeft:230,marginTop:-20}}/> */}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
      </div>

      <div className="payroll__boxContainer">
        <div className="payrollBox paydate">
            <div className="paydate_img"> <TfiWallet /></div>
            <p className="paydate__date">Payroll Date <MdOutlineCalendarMonth /></p>
            <p className='paydate__number'>4/1/2024 </p>
            <p className="paydate__run">Payroll Run:</p>
            <p className="paydate__range">1/12/2023-31/1/2024</p>
        </div>
        <div className="payrollBox">
            <div className="payroll_header">
                <div className="payroll__title">Total Employee</div>
                <img src="" alt="" className="payroll__img" />
            </div>
            <div className="payroll__price">2400</div>
            <p className="payload__desc"><span className="payload__upcolor"><FaArrowAltCircleUp /> +2%</span> Since last quater</p>
        </div>
        <div className="payrollBox">
            <div className="payroll_header">
                <div className="payroll__title">Total Working Hours</div>
                <img src="" alt="" className="payroll__img" />
            </div>
            <div className="payroll__price">4526 hrs</div>
            <p className="payload__desc"><span className="payload__downcolor"><FaArrowAltCircleDown /> -4%</span> Since last quater</p>
        </div>
        <div className="payrollBox">
            <div className="payroll_header">
                <div className="payroll__title">Payroll Cost</div>
                <img src="" alt="" className="payroll__img" />
            </div>
            <div className="payroll__price">₹ 29.3M</div>
            <p className="payload__desc"><span className="payload__downcolor"><FaArrowAltCircleDown /> -2%</span> Since last quater</p>
        </div>
        <div className="payrollBox">
            <div className="payroll_header">
                <div className="payroll__title">Net Salary</div>
                <img src="" alt="" className="payroll__img" />
            </div>
            <div className="payroll__price">₹ 25.3M</div>
            <p className="payload__desc"><span className="payload__upcolor"><FaArrowAltCircleUp /> +2%</span> Since last quater</p>
        </div>
        <div className="payrollBox">
            <div className="payroll_header">
                <div className="payroll__title">Deductions</div>
                <img src="" alt="" className="payroll__img" />
            </div>
            <div className="payroll__price">₹ 3.2M</div>
            <p className="payload__desc"><span className="payload__upcolor"><FaArrowAltCircleUp /> +2%</span> Since last quater</p>
        </div>
        <div className="payrollBox">
            <div className="payroll_header">
                <div className="payroll__title">Statutory Pay</div>
                <img src="" alt="" className="payroll__img" />
            </div>
            <div className="payroll__price">₹ 1.1M</div>
            <p className="payload__desc"><span className="payload__downcolor"><FaArrowAltCircleDown /> -5%</span> Since last quater</p>
        </div>
        
      </div>
      <h1 className='section-title'>EMPLOYEE PAYROLL</h1>
      <div className="payroll__options">
        <div className="payroll_search_container">
        <span className='searchIcon'><CiSearch /></span>
        <input type="text" placeholder='Enter Employee Name'/>
        </div>
        <div className="payroll__addShare">
            <button className='addBtn' onClick={()=>setAddClicked(true)}>+Add</button>
            <button className='shareBtn' onClick={()=>setShareClicked(true)}><FaShare /> Share</button>
        </div>
      </div>
      <div className="rounded-table-container" style={{ marginTop: 20 }}>
        <table className="compensation-table" style={{ marginTop: 0 }}>
          <div className="table_scroll">
            <tbody>
              <tr className="table__head" style={{ backgroundColor: '#522d59' }}>
                <th>Name</th>
                <th>employee ID</th>
                <th>Paid Hours</th>
                <th>Gross Pay</th>
                <th>Statutory Pay</th>
                <th>Deductions</th>
                <th>Net Pay</th>
                <th>Status</th>
                <th>Payslip</th>
                <th>Action</th>
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
                  <td>
                    <div
                      style={{
                        display: "flex",
                        cursor: "pointer",
                        justifyContent: "center",
                      }}
                      onClick={handleMenuClick}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "gray",
                          marginRight: "4px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "gray",
                          marginRight: "4px",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "gray",
                          marginRight: "4px",
                        }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </table>
      </div>

      <BasicMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={menuOpen}
        items={["View", "Update", "Delete"]}
      />
    </div>
  );
}

export default PayrollSection;