import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { updateColor } from '../../Services/userservice';


export default function ColorPopper({action,setNote,noteid,getData}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  ]
    
    async function setColor(color){
        if(action==='create'){
            setNote((prev)=>({...prev,color:color}))
        }else{
            let responce=await updateColor(noteid,{color:color})
            getData()
            console.log(responce)
        }
    }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
     <ColorLensOutlinedIcon onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' ,display:'flex'}}>
         {colorArray.map((color)=>(<div onClick={()=>setColor(color)} style={{height:35,width:35,borderRadius:50,backgroundColor:color,margin:10}}>

         </div>))}
        </Box>
      </Popper>
    </div>
  );
}