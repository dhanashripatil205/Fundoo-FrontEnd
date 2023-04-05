import React from "react";
import "./takeNoteTwo.css";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

export default function TakeNoteTwo() {
  return (
    <div className="takenotetwoo">
      <div className="display">
        <input className="text3" type="text" placeholder="Take a Note..." />
      </div>
      <div className="subcontainer">
        <AddAlertIcon />
        <InsertPhotoOutlinedIcon />
        <AddAlertOutlinedIcon />
        <PersonAddAltIcon />
        <ColorLensOutlinedIcon />
        <ArchiveOutlinedIcon />
        <MoreVertOutlinedIcon />
        <UndoIcon />
        <RedoIcon />
        Close
      </div>
    </div>
  );
}
