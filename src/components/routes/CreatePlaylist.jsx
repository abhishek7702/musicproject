import React, {useState} from "react";
import LeftNavBar from "../LeftNavBar";
import MediaPlayer from "../MediaPlayer";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { TextField,InputAdornment,} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { songs, addSongs} from "../../actions/index"
import { List,ListItemButton,ListItemText, Button} from '@mui/material';



export default function CreatePlaylist(){
    const [searchItem, setSearchItem] = useState("");
    const dispatch = useDispatch();
    dispatch(songs());
    const songList= useSelector((state)=> state.songs);
    const result = songList.filter(word => word.toLowerCase().includes(searchItem.toLowerCase()));
     const playlistSongs = useSelector((state)=> state.playlistSongs);
     console.log(playlistSongs);
    // const [playlistSongs, setPlaylistSongs]= useState([]);
    const [showInput, setShowInput]= useState(true);
    const [playlistName, setPlaylistName]= useState(null);
   
    return(
        <>

<div style={{display:"flex"}}>
           <LeftNavBar/>
       
           <div className="rightSide">
            {(showInput)?
            <>
           <h1>PlayList Name</h1>
           <div style={{display:"flex"}}>
           <TextField onChange={(e)=>{setPlaylistName(e.target.value)}}/>
           <Button 
           onClick={()=>{setShowInput(false)}}
           >
            Save</Button>
           </div>
           </>
: null}
           <h1>{playlistName}</h1>
           {
            playlistSongs.map((item,index)=>{
                return (
                 <List>
                         <ListItemButton>
                             <ListItemText>
                   
                                {item} 
                            
                            </ListItemText>
                       </ListItemButton>
                     </List>
                )
            })
           }
           <TextField id="outlined-basic"  variant="outlined"
           onChange={(e)=>setSearchItem(e.target.value)}
           InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),endAdornment: (
            <InputAdornment position="start">
              <ClearIcon/>
            </InputAdornment>
          )
        }} 
        
        ></TextField>

    {result.map((item,index)=>{
        return (
         <List>
                 <ListItemButton>
                     <ListItemText>
           
                        {item} <AddIcon onClick={
                            ()=>
                             {dispatch(addSongs(item,playlistName))}
                            // {setPlaylistSongs([...playlistSongs,item])}
                            }/>
                    
                    </ListItemText>
               </ListItemButton>
             </List>
        )
    })}
     </div>
     </div>
           <MediaPlayer/>
        </>
    );
}