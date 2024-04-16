import React, { useContext } from 'react'
import { PasswordContext, UserContext } from '../App'


export default function Fgh() {
    const user =useContext(UserContext)
    const pass=useContext(PasswordContext)
  return (
    <div>
        I am {user.name} and my age is {user.age}
        {pass}
    </div>
  )
}
