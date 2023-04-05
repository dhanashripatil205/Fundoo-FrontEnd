import React from 'react'
import "./takeNoteOne.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';


export default function TakeNoteOne() {
  return (
    <div className='takenote'>
      
        <input className="text2" type="text" placeholder="Take a Note..."/>
        <div className='menu'>
        <CheckBoxOutlinedIcon/>
        <BrushOutlinedIcon/>
        <InsertPhotoOutlinedIcon/>

        </div>

    </div>
  )
}
