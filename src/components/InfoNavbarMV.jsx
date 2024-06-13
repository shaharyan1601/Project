import React from "react";
import "./infoNavbar.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

function InfoNavbarMV({ currPath }) {
  return (
    <div className="InfoNavbar">
      <nav className="info__navigation">
        <div className="nav-logo">
          <img src={logo} alt="img" />
        </div>
        <ul className="nav-list">
          <li className={`${currPath === "homeMv" ? "activeLink" : ""}`}>
            <NavLink to="/homeMv">Home</NavLink>
          </li>
          <NavLink to="/infoMv">
            <li className={`${currPath === "infoMv" ? "activeLink" : ""}`}>
              My Info
            </li>
          </NavLink>
          <NavLink to="/leaveMv">
            <li className={`${currPath === "leaveMv" ? "activeLink" : ""}`}>
              Leave
            </li>
          </NavLink>
          <NavLink to="/todoMv">
            <li className={`${currPath === "todoMv" ? "activeLink" : ""}`}>
              To Do
            </li>
          </NavLink>
          <NavLink to="/peopleMv">
            <li className={`${currPath === "peopleMv" ? "activeLink" : ""}`}>
              People
            </li>
          </NavLink>
          <NavLink to="/salarysectionMv">
            <li className={`${currPath === "salarysectionMv" ? "activeLink" : ""}`}>
              Salary
            </li>
          </NavLink>
          <NavLink to="/hiringMv">
            <li className={`${currPath === "hiringMv" ? "activeLink" : ""}`}>
              Hiring
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default InfoNavbarMV;
