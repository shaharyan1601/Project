import React from "react";
import "./infoNavbar.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

function InfoNavbar({ currPath }) {
  return (
    <div className="InfoNavbar">
      <nav className="info__navigation">
        <div className="nav-logo">
          <img src={logo} alt="img" />
        </div>
        <ul className="nav-list">
          <li className={`${currPath === "home" ? "activeLink" : ""}`}>
            <NavLink to="/home">Home</NavLink>
          </li>
          <NavLink to="/info">
            <li className={`${currPath === "info" ? "activeLink" : ""}`}>
              My Info
            </li>
          </NavLink>
          <NavLink to="/leave">
            <li className={`${currPath === "leave" ? "activeLink" : ""}`}>
              Leave
            </li>
          </NavLink>
          <NavLink to="/todo">
            <li className={`${currPath === "todo" ? "activeLink" : ""}`}>
              To Do
            </li>
          </NavLink>
          <NavLink to="/people">
            <li className={`${currPath === "people" ? "activeLink" : ""}`}>
              People
            </li>
          </NavLink>
          <NavLink to="/salarysection">
            <li className={`${currPath === "salarysection" ? "activeLink" : ""}`}>
              Salary
            </li>
          </NavLink>
          <NavLink to="/hiring">
            <li className={`${currPath === "hiring" ? "activeLink" : ""}`}>
              Hiring
            </li>
          </NavLink>
          <NavLink to="/askhr">
            <li className={`${currPath === "askhr" ? "activeLink" : ""}`}>
              Ask HR
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default InfoNavbar;
