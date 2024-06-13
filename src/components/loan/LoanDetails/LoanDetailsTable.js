import React from "react";

export default function LoanDetailsTable() {
  const loanData = [
    {
    sno:"1",
    monthyear:"Sept-2023",
    principal:'1024029',
    interest:"550",
    monthlyEmi:"10790.29INR",
    EMIStatus:"Processed",
    outstandingPrincipal: "2,50,000",
  },
  {
    sno:"1",
    monthyear:"Sept-2023",
    principal:'1024029',
    interest:"550",
    monthlyEmi:"10790.29INR",
    EMIStatus:"Processed",
    outstandingPrincipal: "2,50,000",
  },
  {
    sno:"1",
    monthyear:"Sept-2023",
    principal:'1024029',
    interest:"550",
    monthlyEmi:"10790.29INR",
    EMIStatus:"Processed",
    outstandingPrincipal: "2,50,000",
  },
  {
    sno:"1",
    monthyear:"Sept-2023",
    principal:'1024029',
    interest:"550",
    monthlyEmi:"10790.29INR",
    EMIStatus:"Processed",
    outstandingPrincipal: "2,50,000",
  },
  {
    sno:"1",
    monthyear:"Sept-2023",
    principal:'1024029',
    interest:"550",
    monthlyEmi:"10790.29INR",
    EMIStatus:"Processed",
    outstandingPrincipal: "2,50,000",
  },
  ]

  const tableHeaders = [
    "S.No.",
    "Month-Year",
    "Principal(P)",
    "Interest(I)",
    "Monthly EMI(P+I)",
    "EMI STATUS",
    "Outstanding Principal"
  ];

  return (
    
      <div className="rounded-table-container">
        <div className="table-container">
          <table className="loan__history__table">
            <thead>
              <tr className="table__head">
                {tableHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loanData.map((data, index) => (
                <React.Fragment key={index}>
                  <tr style={{ height: "40px" }}>
                    <td>{data.sno}</td>
                    <td>{data.monthyear}</td>
                    <td>{data.principal}</td>
                    <td>{data.interest}</td>
                    <td>{data.monthlyEmi}</td>
                    <td>{data.EMIStatus}</td>
                    <td>{data.outstandingPrincipal}</td>
                  </tr>
                  {index < loanData.length - 1 && <tr className="row-line"></tr>}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
}