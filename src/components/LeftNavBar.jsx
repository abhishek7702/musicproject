import React from "react";
import { List,ListItemButton,ListItemText,Link} from '@mui/material';



export default function LeftNavBar(){
    return (
        <div clasName="leftNavBarTop">
        <div className="LeftNavBar"  >
       <List >
        <ListItemButton>
    <ListItemText>
        <Link href="/" underline="none">Home</Link>
        
    </ListItemText>
        </ListItemButton>
        <ListItemButton>
    <ListItemText>
        <Link href="/myLibrary" underline="none">My Library</Link>
        
    </ListItemText>
        </ListItemButton>
        <ListItemButton>
    <ListItemText>
        <Link href="/playlists"  underline="none">Playlists</Link>
        
    </ListItemText>
        </ListItemButton>
        <ListItemButton>
      <ListItemText>
     <Link href="/likedSongs" underline="none">LikedSong</Link>
     </ListItemText>
        </ListItemButton>
      <ListItemButton>
        <ListItemText>
      <Link href="/createPlaylist"  underline="none">CreatePlaylist</Link>
        </ListItemText>
       </ListItemButton>
    </List>
    </div>
    </div>
    )
}