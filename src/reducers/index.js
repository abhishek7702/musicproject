import {changeTheNumber, songs, playlistSongs} from "./reducers";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    changeTheNumber,
    songs,
    playlistSongs,

});

export default rootReducer;