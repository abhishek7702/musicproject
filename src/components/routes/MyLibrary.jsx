import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { songs, addSongs} from "../../actions/index"
import { List,ListItemButton,ListItemText, Button} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LeftNavBar from '../LeftNavBar';
import MediaPlayer from "../MediaPlayer";


export default function MyLibrary(){
    const dispatch = useDispatch();
    const [showPlaylist, setShowPlaylist]=useState(false);
    const playlistSongs = useSelector((state)=> state.playlistSongs);
    console.log(playlistSongs);
  
    return (
        <>
        <LeftNavBar/>
        
        <div style= {{display:"flex"}}>
        <h1>{playlistSongs?.playlist}</h1>
        <KeyboardArrowDownIcon onClick={()=>{setShowPlaylist(!showPlaylist)}}/>
        </div>
        {showPlaylist?
            playlistSongs.songs?.map((item,index)=>{
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
           :null}
        
        <MediaPlayer/>
 </>
    );
}