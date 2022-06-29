import React, {useEffect, useState} from "react";
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
    const [playlists,setPlaylists]= useState([]);
    const [songs,setSongs]= useState([]);
    const dispatch = useDispatch();
    // dispatch(songs());
    const songList= useSelector((state)=> state.songs);
    const result = songList.filter(word => word.toLowerCase().includes(searchItem.toLowerCase()));
   //  const playlistSongs = useSelector((state)=> state.playlistSongs);
     
    // const [playlistSongs, setPlaylistSongs]= useState([]);
    const [showInput, setShowInput]= useState(true);
    const [playlistName, setPlaylistName]= useState(null);
   
useEffect(()=>{
  alert("Please click the save button after selecting songs to make your playlist.")
},[showInput])

    return(
        <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
<h1 style={{color:"red"}}>Create Playlist</h1>
</div>
<div style={{display:"flex", width:"80%", justifyContent:"space-around"}}>
           <LeftNavBar/>
       <div>
           <div className="rightSide">
            {(showInput)?
            <>
           <h2>PlayList Name</h2>
           <div >
           <TextField onChange={(e)=>{setPlaylistName(e.target.value)}}
           placeholder="Playlist Name"/>
           
           </div>
           </>
: null}
           {/* <h1>{playlistName}</h1>
           <h1>{playlists.playlistName}</h1>
           {
            // playlistSongs.songs?.map((item,index)=>{
              playlists?.map((item,index)=>{
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
           } */}
           <TextField id="outlined-basic"  variant="outlined" placeholder="Search Song"
           onChange={(e)=>setSearchItem(e.target.value)}
           InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          ),endAdornment: (
            <InputAdornment position="start">
              {/* <ClearIcon onClick={(e)=>{e.target.value=""}}/> */}
            </InputAdornment>
          )
        }} 
        
        ></TextField>

    {result.map((item,index)=>{
        return (
         <List>
                 <ListItemButton>
                     <ListItemText>
           <div style={{display:"flex",textAlign:"center"}}>
                        {item} <AddIcon onClick={
                            ()=>
                            //  {dispatch(addSongs(item,playlistName))}
                            {setSongs([...new Set([...songs,item])])}
                            // {setPlaylists([...playlists,{playlistName:playlistName, songs:songs}])}
                            // {setPlaylistSongs([...playlistSongs,item])}
                            }/>
                            </div>
                    
                    </ListItemText>
               </ListItemButton>
             </List>
        )
    })}
     </div>
     <Button style={{background:"blue", color:"white", marginLeft:"40%"}}
          //  onClick={()=>{setShowInput(true)}}
          onClick={()=>  {setPlaylists([...playlists,[playlistName, songs ]]);setSongs([])}}
           >
            Save</Button>
     </div>
    
     <div style={{ marginLeft:"30%"}}>
       <h1>All Playlists</h1>
       {playlists?.map((item)=>{
         return(
         <>
        <h2>{item[0]}</h2>
        {item[1]?.map((item)=>{
         return(
         <>
        <List>
        <ListItemButton>
            <ListItemText>
  
               {item} 
        </ListItemText>
        </ListItemButton>
      </List>
      </>
         )
       })
       }
      </>
         )
       })
       }

       </div>
       </div>
   
           <MediaPlayer/>
        </>
    );
}