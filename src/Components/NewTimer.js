import React, { useEffect, useState } from 'react'

export default function NewTimer() {
    const [value, setValue] = useState(0)
    const [values, setValues] = useState()
    const [msg, setMsg] = useState("")
    const [isRunning, setIsRunning] = useState(false)
    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => setValue(prev => prev - 1), 1000)
            return () => {
                clearInterval(interval)
            }
        }
    }
        , [isRunning])
    useEffect(() => {
        if (value === 0) {
            setIsRunning(false)
        }
    })
    console.log(value);

    return (
        <div>
            {value >= 0 ? <h1>Countdown timer:{value}secs</h1> : <h1>Happy Birthday Bro......</h1>} <br></br>
            {isRunning ? <input type='number' value={values} disabled={true} onChange={(e) => { setValue(e.target.value); setValues(e.target.value) }} />
                : <input type='number' disabled={false} onChange={(e) => { setValue(e.target.value); setValues(e.target.value) }} />}
            {isRunning ? <button onClick={() => setIsRunning(false)}>Stop</button> : <button onClick={() => setIsRunning(true)}>Start</button>}
            <button onClick={() => setValue(values)}>Reset</button>
        </div>
    )
}
