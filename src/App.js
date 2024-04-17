// import logo from './logo.svg';
// import './App.css';
// import TimeDate from './Components/TimeDate';
// import StopWatch from './Components/StopWatch';
// import Timer from './Components/Timer';
// import NewTimer from './Components/NewTimer';
// import JsonWork from './Components/JsonWork';
// import ThirdParty from './Components/ThirdParty';
// import Crud from './Components/Crud';
// import React, { useReducer } from 'react';
// import Comp1 from './Components/Comp1';
// import Comp2 from './Components/Comp2';
// import Comp3 from './Components/Comp3';
// import Comp5 from './Components/Comp5';
// import Loader from './Components/Loader';
// import Bcd from './Components/Bcd';
// import Reducer from './Components/Reducer';
// export const UserContext=React.createContext()
// export const PasswordContext=React.createContext()

import Parent from "./Components/UseCallback/Parent";
import Parenrt from "./Components/UseMenu/Parenrt";
import Task1 from "./Components/UseReducertask/Task1";

// export const UserCounter=React.createContext()
function App() {
  // const initstate=0
  // const reducer=(state,action)=>{
  //   switch(action){
  //     case 'inc':return state+1;
  //     case 'dec':return state-1;
  //     case 'res':return initstate;
  //     default :return state
  //   }
  // }
  // const[count,dispatch]=useReducer(reducer,initstate)
  // return (
  //   <>
  //   {count}
  //   <UserCounter.Provider value={{count:count,dispatch:dispatch}}>
  //     <Comp1/>
  //     <Comp2/>
  //     <Comp3/>
  //     <Comp5/>
  //   </UserCounter.Provider>



     {/* <UserContext.Provider value={{"name":"Sasikumar","age":20}}>
    <PasswordContext.Provider value={"sk@12345"}>
        <Bcd/>
    </PasswordContext.Provider>
</UserContext.Provider>
<Reducer/> */}
    
  return(
    <>
    {/* <Loader/> */}
    <Task1/>
    </>
  )
}

export default App;
