import React, { useState } from "react";
import InfoNavbar from "../../components/InfoNavbar";
import NavProfile from "../../components/NavProfile";
import LeftInfoNav from "../../components/LeftInfoNav";
import LeftInfoNavWithSubMenu from "../../components/LeftInfoNavWithSubMenu";
import "./index.css";
import ExperienceLetter from "../../components/Askhr/ExperienceLetter";
import Resignation from "components/Askhr/Resignation";
import OnMind from "../../components/Askhr/what'sMind";
import FAQ from "components/Askhr/FAQs";
import AssetRequest from "components/Askhr/AssetRequest";
import ResignForm from "components/Askhr/Resignation/ResignFlow";

export default function AskHr() {
    const [activeIdx, setActiveIdx] = useState("1");
    const [navOptions] = useState([
      {
        id: "1",
        title: "What's on your mind",
      },
      {
        id: "2",
        title: "Ask a question",
      },
      {
        id: "3",
        title: "Asset Request",
      },
      {
        id: "4",
        title: "Experience Letter",
      },
      {
        id: "5",
        title: "Resign from services",
      },
    ]);

    const handleClick = (id) => {
        setActiveIdx((prevIdx) => (prevIdx === id ? null : id));
      };
    
      console.log({ activeIdx });

    return (
      <div className="leave-container left-panel">
        <InfoNavbar currPath="askhr" />
        <div className="leave-wrapper">
          <NavProfile />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <LeftInfoNavWithSubMenu
              navOptions={navOptions}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
            />
            {activeIdx === "1" && <OnMind />}
            {activeIdx === "2" && <FAQ />}
            {activeIdx === "3" && <AssetRequest />}
            {activeIdx === "4" && <ExperienceLetter/>}
            {activeIdx === "5" && <Resignation />}
           
          </div>
        </div>
      </div>
    );
  }
  