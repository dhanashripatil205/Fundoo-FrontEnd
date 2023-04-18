import React from 'react'
import "./takeNoteOne.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


export default function TakeNoteOne({setDisplay}) {
  return (
    <div>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          
          width: 600,
          height: 60,
          marginTop:"50px"
        },
      }}
    >

    <div className='takenote56' onClick={()=>setDisplay(false)}>
       <Paper elevation={3}>

       <div className='InputNote1'><input className='mainInput' type="text" size = '80' placeholder="Take a note..." />
        <div className='InputNote2'>
            <div className='allIcons'><CheckBoxOutlinedIcon /></div>
            <div className='allIcons'><BrushOutlinedIcon /></div>
            <div className='allIcons'><InsertPhotoOutlinedIcon /></div>
        </div>
       
     </div>
       
    </Paper>
    </div>
    </Box>

    </div>

  )
}

