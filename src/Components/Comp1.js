import React, { useContext } from 'react'
import { UserCounter } from '../App'
export default function Comp1() {
    const counter=useContext(UserCounter)
  return (
    <div>Comp1
        <button onClick={()=>{counter.dispatch('inc')}}>+</button>
        <button onClick={()=>{counter.dispatch('dec')}}>-</button>
        <button onClick={()=>{counter.dispatch('res')}}>#</button>
    </div>
  )
}
