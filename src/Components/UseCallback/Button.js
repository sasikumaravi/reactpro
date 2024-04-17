import React from 'react'

function Button(props) {
  return (
    <div>
        <button onClick={props.handleClick}>Inc</button>
    </div>
  )
}
export default React.memo(Button)
