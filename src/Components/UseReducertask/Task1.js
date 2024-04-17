import React, { useReducer } from 'react'
export default function Task1() {
    const inistate={
        first:0,
        second:0
    }
    const reducer=(state,action)=>{
        switch(action){
            case "incA":return {...state,first:state.first+1};
            case "incB":return {...state,second:state.second+1};
            case "decA":return {...state,first:state.first-1};
            case "decB":return {...state,second:state.second-1};
            case "remA":return {...state,first:0};
            case "remB":return {...state,second:0}
            default: return state
        }  
    }
    const[count,dispatch]=useReducer(reducer,inistate)
  return (
    <div style={{textAlign:'center'}}>
        {count.first>0 &&
        <div>
            Product A - Quantity: {count.first}<button onClick={()=>dispatch("remA")} >Remove</button><button onClick={()=>dispatch("decA")}>Decrease</button>
        </div>
}
        {count.second>0 &&
        <div>
            Product B - Quantity: {count.second}<button onClick={()=>dispatch("remB")}>Remove</button><button onClick={()=>dispatch("decB")}>Decrease</button>
        </div>
       }
        <h1>Shopping Cart</h1>
        <button onClick={()=>dispatch("incA")}>Add Product A</button>
        <button onClick={()=>dispatch("incB")}>Add Product B</button>
    </div>
  )
}
