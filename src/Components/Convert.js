import React, { useState } from 'react'
import Mousemove from './Mousemove'

export default function Convert() {
    const[toggle,setToggle]=useState(true)
  return (
    <div>
        <button onClick={()=>{setToggle(!toggle)}}>TooglE</button>
        {toggle && <Mousemove/>}
    </div>
  )
}
