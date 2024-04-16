import React, { useReducer } from 'react'

export default function Reducer() {
    const inistate=0
    const reducer=(state,action)=>{
        switch(action){
            case "inc":return state+1;
            case "dec":return state-1;
            case "res":return inistate
            default:return state
        }
    }
    const[count,dispatch]=useReducer(reducer,inistate)
    const[count1,dispatch1]=useReducer(reducer,inistate)
  return (
    <div>
        {count}
        <button onClick={()=>dispatch("inc")}>+</button>
        <button onClick={()=>dispatch("dec")}>-</button>
        <button onClick={()=>dispatch("res")}>?</button>
        <br></br>
        {count1}
        <button onMouseOver={()=>dispatch1("inc")}>+</button>
        <button onMouseOver={()=>dispatch1("dec")}>-</button>
        <button onMouseOver={()=>dispatch1("res")}>?</button>
    </div>
  )
}
