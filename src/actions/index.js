
export const songs= ()=>{
    return{
        type:"SONGS"
    }
}

export const addSongs=(songName,playlistName)=>{
    return{
        type:"ADDSONGS",
        payload:
        { songName,
            playlistName
        }
    }
}

export const incNumber = ()=>{
    return{
        type: "INCREMENT"
    }
}

export const decNumber= ()=>{
    return({
        type:"DECREMENT"
    })

}