import { useEffect, useState } from "react"


function Time(){
    const [date, setDate] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true)

    useEffect(()=>{
        let timerId;
        if(isRunning){
            timerId = setInterval(()=>{
                setDate(()=>new Date())
            },1000);
        }
        return ()=> clearInterval(timerId);
    },[isRunning])

    const startClock = ()=>{
        setIsRunning(true);
    }

    const stopClock = () => {
        setIsRunning(false);
    }

    

    return(
        <div>
            <h2>It is {date.toLocaleTimeString()}</h2>
            <button onClick={startClock} disabled={isRunning}>Start</button>
            <button onClick={stopClock} disabled={!isRunning}>Stop</button>
        </div>
    )
}

export default Time;