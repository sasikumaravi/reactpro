import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function ThirdParty() {
    const[list,setList]=useState([])
    const[index,setIndex]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:3003/std`)
        .then(response=>setList(response.data))
        .catch(err=>console.log("err"))
    },[index])
  return (
    <div>JsonWork
        <br></br>
        {/* <input onChange={(e)=>setIndex(e.target.value)}/> */}
        {list.map((ab)=><p>{ab.title}</p>)}
    </div>
  )
}
