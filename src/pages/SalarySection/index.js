import React, { useState } from "react";
import InfoNavbar from "../../components/InfoNavbar";
import NavProfile from "../../components/NavProfile";
import "./index.css";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";
import SalarySectionLoan from "../../components/SalarySectionLoan";
import SalarySectionApplyLoan from "../../components/SalarySectionLoan/ApplyLoan";
import { TimeTracking } from "../../components/SalarySectionCompensation/TimeTracking";
import { SalarySectionPayslip } from "components/SalarySectionCompensation/SalarySectionPayslip";
import LoanDetails from "components/loan/LoanDetails/LoanDetails";
import PaidTime from "components/SalarySectionCompensation/PaidTime";

export default function SalarySection() {
  const [activeIdx, setActiveIdx] = useState("1");
  const [navOptions] = useState([
    {
      id: "1",
      title: "Loan",
      icon: <IoIosArrowDown />,
      subNav: [
        {
          id: "1-submenu1",
          title: "My Loan",
        },
        {
          id: "1-submenu2",
          title: "Apply Loan",
        },
      ],
    },
    {
      id: "2",
      title: "Compensation",
      icon: <IoIosArrowDown />,
      subNav: [
        {
          id: "2-submenu1",
          title: "Paid Time-Off",
        },
        {
          id: "2-submenu2",
          title: "Time Sheet",
        },
      ],
    },
  ]);

  const handleClick = (id) => {
    setActiveIdx((prevIdx) => (prevIdx === id ? null : id));
  };

  console.log({ activeIdx });

  return (
    <div className="leave-container left-panel">
      <InfoNavbar currPath="salarysection" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={handleClick}
          />
          {activeIdx === "1" && (
            <LoanDetails handleIdx={() => setActiveIdx("1-submenu2")} />
          )}
          {activeIdx === "1-submenu1" && (
            <SalarySectionLoan handleIdx={() => setActiveIdx("1-submenu2")} />
          )}
          {activeIdx === "1-submenu2" && <SalarySectionApplyLoan />}
          {activeIdx === "2" && <SalarySectionPayslip />}
          {activeIdx === "2-submenu1" && <PaidTime />}
          {activeIdx === "2-submenu2" && <TimeTracking />}

        </div>
      </div>
    </div>
  );
}
