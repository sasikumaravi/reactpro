import React, { useEffect, useState } from 'react'

export default function Convert1() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setCount(prev=>prev+1)
        },1000)
        return()=>{
            clearTimeout(timeout)
        }
    })
  return (
    <div>Timer::
        {count}
    </div>
  )
}
