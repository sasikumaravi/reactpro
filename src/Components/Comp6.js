import React, { useContext } from 'react'
import { UserCounter } from '../App'

export default function Comp6() {
    const count=useContext(UserCounter)
  return (
    <div>Comp6
        <button onClick={()=>count.dispatch('inc')}>++</button>
        <button onClick={()=>count.dispatch('dec')}>--</button>
        <button onClick={()=>count.dispatch('res')}>??</button>
    </div>
  )
}
