import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <div className="headerclass">
      <div className="firstpart">
        <MenuIcon />
        <LightbulbCircleIcon />
        Keep
      </div>

      <div className="secondpart">
      <SearchIcon className="searchicon"/>

        <input className="text1" type="text" placeholder="Search"/>
      </div>

      <div className="thirdpart">
        <RefreshIcon />
        <ViewStreamIcon />
        <SettingsIcon />
      </div>

      <div className="fourthpart">
        <ViewCompactIcon />
        <AccountCircleIcon />
      </div>
    </div>

    
  );
}
