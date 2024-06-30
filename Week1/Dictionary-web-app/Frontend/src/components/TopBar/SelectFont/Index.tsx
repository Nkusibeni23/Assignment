import React from "react";
import "./SelectFont.css";
import Icon from "../../../assets/images/icon-arrow-down.svg";

const SelectFont = () => {
  const handleFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    document.querySelector("body")!.style.fontFamily = e.target.value;
  };
  return (
    <div className="select-wrapper">
      <select className="select-font" onChange={handleFont}>
        <option value="sans-serif">Sans Serif</option>
        <option value="serif">Serif</option>
        <option value="Times New Roman">Times New Roman</option>
        {/* Add more options */}
      </select>
      <span className="select-arrow">
        <img src={Icon} alt="Icon-Arrow-Down" />
      </span>
    </div>
  );
};

export default SelectFont;
