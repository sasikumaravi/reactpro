import React, { useMemo, useState } from 'react'

export default function Parenrt() {
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)
    const isEven=useMemo(()=>{
        let i=0
        while(i<20000000){
            i++;
        }
        return count1%2===0
    },[count1])
  return (
    <div>
        {isEven?'Even':'Odd'}
        <button onClick={()=>{setCount1(count1+1)}}>count1 {count1} </button>
        <button onClick={()=>{setCount2(count2+1)}}>count2 {count2}</button>
    </div>
  )
}
