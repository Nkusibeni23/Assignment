import React from "react";
import "./TopBar.css";
import Logo from "../../assets/images/logo.svg";
// import Icon from "../../assets/images/icon-arrow-down.svg";
import SelectFont from "./SelectFont/Index";
import ThemeHandler from "./ThemeHandler/Index";

const TopBar = () => {
  const handleFont = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    document.querySelector("body")!.style.fontFamily = e.target.value;
  };

  return (
    <div className="topbar">
      <div className="topbar__content">
        <div className="brand">
          <img src={Logo} alt="logo" />
        </div>

        <div className="topbar__actions">
          <SelectFont />
          {/* <img src={Icon} alt="Icon-Arrow-Down" /> */}
          <ThemeHandler />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
