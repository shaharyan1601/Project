import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import LoanDetails from "./LoanDetails/LoanDetails";
import { Button } from "react-bootstrap";
import loan from "components/Loan.png";
import axios from "axios";

export default function LoanList() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableData, setTableData] = useState([]);

  const handleRowSelection = (id) => {
    const selectedItem = tableData.find((data) => data.id === id);
    setSelectedRow(selectedItem);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/todo/allloan`);
      setTableData(response.data.data);
    } catch (error) {
      console.error("Error fetching loan data:", error);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  const handleRowBack = () => {
    setSelectedRow(null);
  };

  return (
    <>
      {!selectedRow ? (
        <div className="loan_list">
          <h3><img src={loan} alt="" /> LOAN</h3>
          <div className="leave__history__header">
            <p classname="faq-paragraph"style={{marginLeft:30}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!
            </p>
          </div>
          <div className="loan_field">
            <div className="input-container">
              <input
                className="loan_search"
                type="text"
                name=""
                id=""
                placeholder="Search by employee name"
              />
              <div className="loan-icon-container">
                <CiSearch className="icon" />
              </div>
            </div>
          </div>
          <div className="rounded-table-container" style={{ marginTop: 20 }}>
            <table className="leave__history__table">
              <tr className="table__head">
                <th>Loan.NO.</th>
                <th>Type</th>
                <th>Name</th>
                <th>Created On</th>
                <th>Amount</th>
                <th>Interest Rate</th>
                <th>Tenure</th>
                <th>Payment Mode</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
              {tableData.map((data) => (
                <tr onClick={() => handleRowSelection(data.id)} key={data.id}>
                  <td>{data.loanNo}</td>
                  <td>{data.type}</td>
                  <td>{data.name}</td>
                  <td>{data.createdOn}</td>
                  <td>{data.amount}</td>
                  <td>{data.interstRate}</td>
                  <td>{data.tenure}</td>
                  <td>{data.paymentMode}</td>
                  <td
                    className={
                      data.status === "in progress" ? "inprogress" : "completed"
                    }
                  >
                    {data.status}
                  </td>
                  <td>
                    <Button
                      variant="success"
                      className="action_btn_each"
                      onClick={() => handleRowSelection(data.id)}
                    >
                      {data.details}
                    </Button>
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
      ) : null}
      {selectedRow ? <LoanDetails handleRow={handleRowBack} selectedRow={selectedRow} /> : null}
    </>
  );
}
