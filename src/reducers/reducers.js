
export const changeTheNumber= ( state=0, action)=>{
    switch(action.type){
        case "INCREMENT":
            return state+1;
            case "DECREMENT":
                return state-1;
                default: return state;
    }
    }
    const initialState = ["No Love", "Rollin", "Work", "Heat Waves", "Animals"];
    export const songs= ( state= initialState, action)=>{
        console.log("reducer song")
        switch(action.type){
            case "SONGS":
                return state;
            
                    default: return state;
        }
        }
    
        const initialSongs=[];
        export const playlistSongs= (state= initialSongs, action)=>{
    switch(action.type){
        case "ADDSONGS": 
        // return [...state, action.payload.songName]
        // return [action.payload.playlistName,[...state, action.payload.songName]]
        return [...state,{playlist:action.payload.playlistName,songs:[state.songs, action.payload.songName]}]
        default: return state;
    }
    
        }