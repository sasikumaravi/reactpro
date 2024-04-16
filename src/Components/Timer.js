import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Timer() {
    const [count, setCount] = useState(0)
    const [running, setisRunning] = useState(true)
    const [intervalId, setIntervalId] = useState(0)
    useEffect(() => {
        if (running) {
            const interval = setInterval(() => setCount(prev => prev + 1), 1000)
            setIntervalId(interval)
        }
        return () => {
            clearInterval(setIntervalId)
        }
    }, [])
    const handleClick = () => {
        if (running) {
            clearInterval(intervalId)
            setisRunning(false)
        }
        else {
            setIntervalId(setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000))
            setisRunning(true)
        }
    }
    return (
        <div>
            <h1>Time:{count}</h1><br></br>
            <button onClick={handleClick}>{running ? <>Stop</> : <>Start</>}</button>
        </div>
    )
}
