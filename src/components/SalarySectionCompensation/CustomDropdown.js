import React from "react";
import Select from "react-select";
import "./index.css";
import { FaRegFileAlt } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

const CustomDropdown = ({ options }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: "0px 0px 4px rgb(113, 113, 113) inset",
      outline: "none",
      border: "none",
    }),
  };

  const formatOptionLabel = ({ label, image }) => (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className="stack-containers"
    >
      {options.map((option, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "#552D59" }}>
            <FaRegFileAlt size={20} />
          </div>
          {label}
        </div>
      ))}
    </div>
  );

  return (
    <div className="custom-select-container">
      <div className="custom-select-wrapper">
        <div className="custom-select">
          <Select
            options={options}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
            isSearchable={false}
          />
          <div className="custom-select-icon" style={{ width: "8%" }}>
            <BiSolidDownArrow className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
