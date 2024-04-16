import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function JsonWork() {
    const[list,setList]=useState({})
    const[index,setIndex]=useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${index}`)
        .then(response=>setList(response.data))
        .catch(err=>console.log("err"))
    },[index])
  return (
    <div>JsonWork
        <br></br>
        <input onChange={(e)=>setIndex(e.target.value)}/>
        {<p>{list.title}</p>}
    </div>
  )
}
