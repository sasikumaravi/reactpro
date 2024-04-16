import React, { useState } from 'react'
import { useEffect } from 'react'
export default function Loader() {
    const[working,setWorking]=useState(false)
    const[timing,setTiming]=useState(0)
    const[times,setTimes]=useState(0)
    useEffect(()=>{
        if(working){
            setInterval(()=>{
                setTiming(prev=>prev+1)
            },1000);
        } 
    },[working])
    const funs=()=>{
        setWorking(true)
    }
  return (
    <div>{timing}
    <input type='number' onChange={(e)=>setTimes(e.target.value)}/>
    <button onClick={funs}>Start</button>
    <div style={{height:"50px",width:"500px",border:"1px solid black"}}>
        <div style={{height:"50px",width:`${timing}px`,backgroundColor:"red"}}>
        </div>
    </div>
    </div>
  )
}
