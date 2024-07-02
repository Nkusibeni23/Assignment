import React from "react";
import "./SelectFont.css";
import Icon from "../../../assets/images/icon-arrow-down.svg";

interface SelectFontProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFont: React.FC<SelectFontProps> = ({ onChange }) => {
  return (
    <div className="select-wrapper">
      <select className="select-font" onChange={onChange}>
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
