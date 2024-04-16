import React, { useContext } from 'react'
import { UserCounter } from '../App'

export default function Comp4() {
    const counter=useContext(UserCounter)
  return (
    <div>Comp4
        <button onClick={()=>{counter.dispatch('inc')}}>inc</button>
        <button onClick={()=>{counter.dispatch('dec')}}>dec</button>
        <button onClick={()=>{counter.dispatch('res')}}>res</button>
    </div>
  )
}
