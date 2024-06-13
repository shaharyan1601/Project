import React from "react";
import "./infoNavbar.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

function InfoNavbarHR({ currPath }) {
  return (
    <div className="InfoNavbar">
      <nav className="info__navigation">
        <div className="nav-logo">
          <img src={logo} alt="img" />
        </div>
        <ul className="nav-list">
          <li className={`${currPath === "homehr" ? "activeLink" : ""}`}>
            <NavLink to="/homehr">Home</NavLink>
            
          </li>
          <NavLink to="/infoHR">
            <li className={`${currPath === "infoHR" ? "activeLink" : ""}`}>
              My Info
            </li>
          </NavLink>
          <NavLink to="/leaveHR">
            <li className={`${currPath === "leaveHR" ? "activeLink" : ""}`}>
              Leave
            </li>
          </NavLink>
          <NavLink to="/todoHR">
            <li className={`${currPath === "todoHR" ? "activeLink" : ""}`}>
              To Do
            </li>
          </NavLink>
          <NavLink to="/peopleHR">
            <li className={`${currPath === "peopleHR" ? "activeLink" : ""}`}>
              People
            </li>
          </NavLink>
          <NavLink to="/salarysectionHR">
            <li className={`${currPath === "salarysectionHR" ? "activeLink" : ""}`}>
              Salary
            </li>
          </NavLink>
          <NavLink to="/hiringHR">
            <li className={`${currPath === "hiringHR" ? "activeLink" : ""}`}>
              Hiring
            </li>
          </NavLink>
        
        </ul>
      </nav>
    </div>
  );
}

export default InfoNavbarHR;
