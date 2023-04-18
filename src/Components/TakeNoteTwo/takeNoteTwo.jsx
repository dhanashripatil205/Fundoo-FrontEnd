import React from "react";
import "./takeNoteTwo.css";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { createNote } from "../../Services/userservice";
import ColorPopper from '../colorpopper/ColorPopper'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function TakeNoteTwo({setDisplay , getData}) {
const [note,setNote] = React.useState({title: '',description: '',archieve:false, trash:false})

const Changetitle = (event)=>{
   setNote((prev)=>({...prev, title:event.target.value}))
}

const Changedescription = (event)=>{
  setNote((prev)=>({...prev, description:event.target.value}))
}

async function submit(){

  let response=await createNote(note)
  console.log(response)
  getData()
}



  return (
    <ClickAwayListener onClickAway={()=>setDisplay(true)}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": { 
            width: 600,
            height: 70,
            backgroundColor:'red'
          },
        }}
      >
    
    <div className="takenotetwoo"  >
    <Paper elevation = {3} style={{backgroundColor:note.color}}>

      <div className="display">
      <input className="title" type="text" placeholder="Title..." onChange={Changetitle}/>
        <input className="description" type="text" placeholder="Description..."  onChange={Changedescription}/>
      </div>
      <div className="subcontainerNewSub">
        <AddAlertIcon />
        <InsertPhotoOutlinedIcon />
        <AddAlertOutlinedIcon />
        <PersonAddAltIcon />
        <ColorPopper action='create' setNote={setNote}/>
        <ArchiveOutlinedIcon onClick={()=>setNote((preState)=>({...preState,archieve:true}))} />
        <MoreVertOutlinedIcon />
        <UndoIcon />
        <RedoIcon />
        <button onClick={submit}>Close</button>
      </div>
      </Paper>

    </div>
    </Box>
    </ClickAwayListener>
  );
}
