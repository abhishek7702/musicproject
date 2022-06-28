import React from "react";
import {Slider} from '@mui/material';
import VolumeDown from '@mui/icons-material/VolumeDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CastIcon from '@mui/icons-material/Cast';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import PauseIcon from '@mui/icons-material/Pause';
import LyricsIcon from '@mui/icons-material/Lyrics';
import QueueIcon from '@mui/icons-material/Queue';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';

export default function MediaPlayer(){
    return(
<div style={{display:"flex",textAlign:"center",justifyContent:"space-between", background:"pink",marginTop:"6.5%"}}>


<div style={{display:"flex",width:"20%",justifyContent:"space-around"}}>
 <div style={{display:"flex",justifyContent:"space-between",width:"25%"}}>
    <FavoriteBorderIcon/>
    <CastIcon/>
 </div>

</div>


<div style={{width:"60%" }}>
    <div  style={{textAlign:"center",display:"flex",justifyContent:"space-around",width:"100%"}}>
        <div style={{width:"30%", display:"flex", justifyContent:"space-between"}}>
<ShuffleIcon   fontSize="medium"  />
<SkipNextIcon  fontSize="medium" />
<PlayArrowIcon fontSize="medium" />
<PauseIcon fontSize="medium" />
<SkipPreviousIcon   fontSize="medium"/>
<ReplayIcon fontSize="medium" />
</div>
</div>

<div   style={{textAlign:"center",width:"100%",display:"flex",justifyContent:"space-around",}}>
    <Slider aria-label="Volume" style={{width:"80%"}}  /></div>

</div>


<div style={{width:"20%",display:"flex",justifyContent:"space-around"}}>
<div style={{display:"flex",justifyContent:"space-between", width:"90%"}}>
<LyricsIcon/>
<QueueIcon/>
<ConnectedTvIcon/>
<VolumeDown />
  <Slider aria-label="Volume" style={{width:"50%"}}  /></div>
</div>

  

</div>
    );
}