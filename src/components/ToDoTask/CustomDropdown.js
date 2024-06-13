import React from "react";
import Select from "react-select";
import "./index.css";

const CustomSelect = ({ options }) => {
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
  };

  const formatOptionLabel = ({ label, image }) => (
    <div
      style={{ display: "flex", alignItems: "center" }}
      className="stack-containers"
    >
      {options.map((option, index) => (
        <img
          key={option.id}
          src={option.img}
          alt={option.id}
          className="custom-stacked-img"
          style={{
            "--index": index,
            width: "20px",
            height: "20px",
            marginRight: "5px",
          }}
        />
      ))}
    </div>
  );

  return (
    <Select
      options={options}
      styles={customStyles}
      formatOptionLabel={formatOptionLabel}
      isSearchable={false}
    />
  );
};

export default CustomSelect;
