import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/routes/HomePage";
import Playlists from "./components/routes/Playlists";
import MyLibrary from "./components/routes/MyLibrary";
import LikedSongs from "./components/routes/LikedSong";
import CreatePlaylist from "./components/routes/CreatePlaylist";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/playlists" element={<Playlists/>}/>
      <Route path="/myLibrary"  element={<MyLibrary/>}/>
      <Route path="/likedSongs"  element={<LikedSongs/>}/>  
      <Route path="/createPlaylist"  element={<CreatePlaylist/>}/>  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
