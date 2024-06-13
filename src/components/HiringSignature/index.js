import React from "react";
import "./index.css";
import { FaRegFileAlt } from "react-icons/fa";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DrawTypeComp from "./DrawComp";
import UploadComp from "./UploadComp";
import sign from "components/sign.png";

export default function HiringSignature() {
  return (
    <div className="add-job-page flex">
      <div className="add-job-open-content">
        <h3 className="add-job-open-title"><img src={sign} alt="" />    ADD E-SIGNATURE</h3>
        <div className="leave__history__header">
          <p className="faq-paragraph"style={{marginLeft:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            voluptas dolor saepe necessitatibus deserunt!
          </p>
        </div>
        <div className="sign-box">
          <Tabs defaultActiveKey="draw">
            <Tab eventKey="draw" title="DRAW" className="each_tab">
              <DrawTypeComp compType="draw" />
            </Tab>
            <Tab eventKey="type" title="TYPE" className="each_tab">
              <DrawTypeComp compType="type" />
            </Tab>
            <Tab eventKey="upload" title="UPLOAD" className="each_tab">
              <UploadComp />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
