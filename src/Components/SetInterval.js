import React,{useEffect, useState} from 'react'

export default function SetInterval() {
    const[count,setCount]=useState(0)
    const[intervalid,setIntervalid]=useState()
    useEffect(()=>{
        const inter=setInterval(()=>{
            setCount(prev=>prev+1)
        },1000);
        setIntervalid(inter)
        return()=>{
            clearInterval(intervalid)
        }
    },[])
  return (
    <div>
        Count:{count}
        <button onClick={()=>{clearInterval(intervalid)}}>Stop</button>
    </div>
  )
}
