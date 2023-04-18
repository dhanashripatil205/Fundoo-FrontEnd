import React from 'react'
import './takeNoteThree.css'
import AddAlertIcon from "@mui/icons-material/AddAlert";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ColorPopper from '../colorpopper/ColorPopper';
import { addArchive  , addNoteInTrash,removeNoteFromTrash,removeArchive}  from '../../Services/userservice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { updateNote } from '../../Services/userservice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


const style = {
  position: 'absolute',
  top: '35%',
  left: '46%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height:120,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  'border-radius':'10px',
  'display': 'flex',
 ' flex-direction': 'column',
  
}

function TakeNoteThree({note,getData}) {
  
  const [open, setOpen] = React.useState(false);
  const [noteobj, setNoteObj]= React.useState({})
  const handleOpen = (note) => {setNoteObj(note)
    setOpen(true)};

  const handleClose = () => setOpen(false);

  async function updateArchive(){
    if(note.archieve===false){
      let responce=await addArchive(note._id)
      getData()
      console.log(responce)
  }else{
      let responce=await removeArchive(note._id)
      getData()
      console.log(responce)
        
   }
  }
    

  
      
   async function updateTrash(){
    
    if(note.trash===false){
      let responce=await addNoteInTrash(note._id)
      getData()
      console.log(responce)
  }else{
      let responce=await removeNoteFromTrash(note._id)
      getData()
      console.log(responce)
        
   }

  
}

   async function submit(){
    let responce = await updateNote(noteobj)
console.log(responce)
getData()
    }
  

  return (
    <div>
    <Card className='subContainerNew' style={{backgroundColor:note.color}}>

 <CardContent>

<div className='title11' fontSize='x-large'  onClick={()=>handleOpen(note)}>{note.title}</div>
<div className='description11' fontSize='x-large' onClick={()=>handleOpen(note)}>{note.description}</div>
</CardContent>

<CardActions className='icons'>
        <AddAlertIcon fontSize='small' />
        <InsertPhotoOutlinedIcon fontSize='small' />
        <AddAlertOutlinedIcon fontSize='small'/>
        <PersonAddAltIcon  fontSize='small'/>
        <RestoreFromTrashIcon fontSize='small' onClick={updateTrash}/>
        <ColorPopper  action='edit' noteid={note._id} getData = {getData}/>
        <ArchiveOutlinedIcon fontSize='small' onClick={updateArchive} />
        <MoreVertOutlinedIcon fontSize='small'/>

      

</CardActions>
</Card>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <input className='inputTitleDescription' defaultValue={noteobj.title} onChange={(e)=>setNoteObj((prev)=>({...prev,title:e.target.value}))}></input>
          <input className='inputTitleDescription'defaultValue={noteobj.description} onChange={(e)=>setNoteObj((prev)=>({...prev,description:e.target.value}))}></input>
         <div className='alliconsNewTech3' >
        <AddAlertIcon />
        <InsertPhotoOutlinedIcon />
        <AddAlertOutlinedIcon />
        <PersonAddAltIcon />
        <RestoreFromTrashIcon onClick={updateTrash}/>
        <ColorPopper  action='edit' noteid={note._id}/>
        <ArchiveOutlinedIcon onClick={updateArchive} />
        <MoreVertOutlinedIcon />
        <div>
        <button onClick={submit}>Close</button>

        </div>

        </div>
        </Box>
        
      </Modal>

    </div>//main container
  )
}

export default TakeNoteThree