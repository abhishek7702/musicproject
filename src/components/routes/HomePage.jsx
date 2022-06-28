import React from "react";
// import { incNumber, decNumber } from "../../actions";
// import { useDispatch, useSelector } from "react-redux";
import LeftNavBar from "../LeftNavBar";
import MediaPlayer from "../MediaPlayer";

export default function HomePage(){
    // const dispatch = useDispatch();
    // const number= useSelector((state)=> state.changeTheNumber)
    return (
        <>
        <LeftNavBar/>
        {/* <button onClick={()=>{dispatch(incNumber())}}>+</button>
        <input value={number}/>
        <button onClick={()=>{dispatch(decNumber())}}>-</button> */}
        <MediaPlayer/>
        </>
        )
}