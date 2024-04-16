import React, { useEffect, useState } from 'react'

export default function TimeDate() {
    const[time,setTime]=useState(new Date())
    const[val,setVal]=useState('')

    const [interId,setInter]= useState()
    useEffect(()=>{
        const inter=setInterval(()=>{
            setTime(new Date())
        },1000
        )
        setInter(inter)
       return()=>{
        clearInterval(interId)
       } 
    },[])
    useEffect(()=>{
        const ts=time.toLocaleTimeString()
        console.log(ts);
        if(ts==="12:04:30 PM"){
            setVal("It is Lunch Time")
        }
    })
  return (
    <div>
        <h1>Times Now:{time.toLocaleTimeString()}</h1>
        <h1>{val}</h1>
        <button onClick={()=>{setInterval(()=>{
            setTime(new Date())
        },1000
        )}}>Start</button>
        <button onClick={()=>{clearInterval(interId)}}>Stop</button>
    </div>
  )
}
