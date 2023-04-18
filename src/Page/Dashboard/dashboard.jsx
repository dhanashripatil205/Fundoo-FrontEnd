import React,{ useState ,useEffect } from 'react'
import './dashboard.css'
import Header from '../../Components/Header/header'
import TakeNoteOne from '../../Components/TakeNoteOne/takeNoteOne'
import TakeNoteTwo from '../../Components/TakeNoteTwo/takeNoteTwo'
import TakeNoteThree from '../../Components/TakeNoteThree/takeNoteThree'
import { getNotes } from '../../Services/userservice'
import NavDrawer from '../../Components/drawer/Drawer'
import { Container, Grid } from "@mui/material";
import HeaderNew from '../../Components/HeaderNew/HeaderNew'


export default function Dashboard() {
    const [display,setDisplay]=useState(true)
    const [notes,setNotes] = useState([])
    const [open, setOpen] = useState(false)
    const [typeOfNotes, setTypeOfNotes] = useState('Notes')
     useEffect(()=>{ getData() },[typeOfNotes])

    function listenToHeader(){
      setOpen(!open)
    }

   async function getData(){

    let response=await getNotes()
    
  if(typeOfNotes==="Notes"){
      let arr=response.data.data.filter((note)=>note.archieve===false&& note.trash===false)
      setNotes(arr)
      console.log(arr)
    }else if(typeOfNotes==="Archive"){
      let arr=response.data.data.filter((note)=>note.archieve===true&& note.trash===false)
      setNotes(arr)
      console.log(arr)
    }else{
      let arr=response.data.data.filter((note)=>note.archieve===false&& note.trash===true)
      setNotes(arr)
      console.log(arr)
    }

   }
  return (
    <div>
      <HeaderNew listenToHeader={listenToHeader}/>
      <NavDrawer open={open} setTypeOfNotes={setTypeOfNotes}/>
    {display ? <TakeNoteOne setDisplay={setDisplay}/> : <TakeNoteTwo setDisplay={setDisplay}  getData = {getData}/>}
    <div  className='container123'>
          <Grid container spacing={3} direction={'row'} justifyContent= {"flex-start"}>
          {notes.map((note)=>(
            <Grid item  xs={12} sm={6} md={4} lg={3} >
            <TakeNoteThree note = {note} getData = {getData}/>
            </Grid>
          ))}
         </Grid>
        </div>
        
    </div>
  )
}
