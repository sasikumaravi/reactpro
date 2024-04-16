import React, { useState } from 'react'
import { useEffect } from 'react'
import '../App.css'
export default function Loader() {
    const [duration, setDuration] = useState()
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [isTimerCompleted, setIsTimerCompleted] = useState(false)
    useEffect(() => {
        let interval;
        if (isRunning && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(prev => prev - 1)
            }, 1000)
        }
        else if (seconds === 0 && isRunning) {
            setIsRunning(false)
            setIsTimerCompleted(true)
        }
        return () => { clearInterval(interval) }
    }, [isRunning, seconds])

    const progresswidth = (seconds / duration) * 100
    return (
        <div>
            {isTimerCompleted ? (<h1>Majaa Bro!!!</h1>) : (<h1>{seconds}</h1>)}
            <input type='number' value={duration} onChange={(e) => { setSeconds(e.target.value); setDuration(e.target.value) }} disabled={isRunning} />
            {isRunning ? (<button onClick={() => setIsRunning(false)}>Stop</button>) : (<button onClick={() => setIsRunning(true)}>Start</button>)}
            <button onClick={() => { setSeconds(duration); setIsTimerCompleted(false) }}>Reset</button>
            {/*  */}
            <div className='container'>
                <div className='progressbar' style={{ width: progresswidth + "%" }}>

                </div>
            </div>
        </div>
    )
}
