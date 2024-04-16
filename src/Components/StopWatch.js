import React, { useState,useEffect } from 'react'

export default function StopWatch() {
    const[count,setCount]=useState(0)
    const[intervalid,setIntervalid]=useState()
    const[button,setButton]=useState("start")
    useEffect(()=>{
        const inter=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000);
        setIntervalid(inter)
        return()=>{
            clearInterval(intervalid)
        }
    },[])
    const setBut=()=>{
        if(button==="start"){
            setButton("stop")
        }
        if(button==="stop"){
            setButton("start")
            
        } 
    }
    

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={setBut}>{button}</button>
        <button onClick={()=>{ setCount(count+1)}}>reset</button>
    </div>
  )
}
