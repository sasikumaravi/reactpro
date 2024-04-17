import React, { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button'
import Display from './Display'

export default function Parent() {
    const[age,setAge]=useState(22)
    const[salary,setSalary]=useState(25000)
    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const handleInc=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    
  return (
    <div>
        <Title/>
        <Display name="Age" dis={age}/>
        <Button name="Age" handleClick={handleAge}/>
        <Display name="Salary" dis={salary}/>
        <Button name="Salary" handleClick={handleInc}/>
    </div>
  )
}
