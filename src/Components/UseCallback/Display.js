import React from 'react'

 function Display(props) {
  return (
    <div>
        {props.name}---{props.dis}
    </div>
  )
}
export default React.memo(Display)
