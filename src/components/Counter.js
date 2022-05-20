import React, { useEffect, useState } from 'react'
import "./Counter.css"

function Counter() {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [counter, setCounter] = useState(false)
    const [clear, setClear] = useState(0)

    useEffect(() =>{
        let timer;

        if(counter){
            timer = setInterval(() => {
                setSeconds(seconds + 1)
                console.log(seconds)
                if(seconds === 59){
                    setMinutes(minutes + 1)
                    setSeconds(0)
                }
            }, 1000);
            setClear(timer)
        }
        else{
            clearInterval(clear)
        }
        return () => clearInterval(clear)
    },[seconds, minutes,counter])

    const startTimer = () =>{
        setCounter(true)
    }

    const stopTimer = () =>{
        setCounter(false)
    }

  return (
    <div className='counter'>
        <h1 className='count'>{minutes > 9? minutes:"0"+minutes} : {seconds > 9? seconds:"0"+seconds}</h1>
        <div>
            <button type='button' className='btn btn-success start-btn' onClick={startTimer}>Start</button>
            <button type='button' className='btn btn-danger' onClick={stopTimer}>Stop</button>
        </div>
    </div>
  )
}

export default Counter