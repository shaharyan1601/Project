import React, { useState } from "react";
import InfoNavbarMV from "../../components/InfoNavbarMV";
import NavProfile from "../../components/NavProfile";
import "./index.css";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import { IoIosArrowDown } from "react-icons/io";
import SalarySectionLoan from "../../components/SalarySectionLoan";
import SalarySectionApplyLoan from "../../components/SalarySectionLoan/ApplyLoan";
import { SalarySectionCompensation } from "../../components/SalarySectionCompensation";
import { CompensationList } from "../../components/SalarySectionCompensation/CompensationList";
import { AddCompensation } from "../../components/SalarySectionCompensation/AddCompensation";
import { TimeTracking } from "../../components/SalarySectionCompensation/TimeTracking";
import { SalarySectionPayslip } from "components/SalarySectionCompensation/SalarySectionPayslip";
import PayrollSection from "components/SalarySectionCompensation/PayrollSection";

export default function SalarySectionMV() {
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
          title: "Payroll",
          icon: <IoIosArrowDown />,
          subNav: [
            {
              id: "2-submenu2-1",
              title: "PaySlip",
            },
            {
              id: "2-submenu2-2",
              title: "Add COmpensation",
            },
            {
              id: "2-submenu2-3",
              title: "Compensation List",
            },
          ],
        },
        {
          id: "2-submenu3",
          title: "Time Tracking",
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
      <InfoNavbarMV currPath="salarysectionMv" />
      <div className="leave-wrapper">
        <NavProfile />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <LeftInfoNavWithSubMenu
            navOptions={navOptions}
            activeIdx={activeIdx}
            setActiveIdx={handleClick}
          />
          {activeIdx === "1" && (
            <SalarySectionLoan handleIdx={() => setActiveIdx("1-submenu2")} />
          )}
          {activeIdx === "1-submenu1" && (
            <SalarySectionLoan handleIdx={() => setActiveIdx("1-submenu2")} />
          )}
          {activeIdx === "1-submenu2" && <SalarySectionApplyLoan />}
          {activeIdx === "2" && <SalarySectionCompensation />}
          {activeIdx === "2-submenu1" && <SalarySectionCompensation />}
          {activeIdx === "2-submenu2-1" && <SalarySectionPayslip />}
          {activeIdx === "2-submenu2" && <PayrollSection />}
          {activeIdx === "2-submenu2-2" && <AddCompensation />}
          {activeIdx === "2-submenu2-3" && <CompensationList />}
          {activeIdx === "2-submenu3" && <TimeTracking />}
        </div>
      </div>
    </div>
  );
}
