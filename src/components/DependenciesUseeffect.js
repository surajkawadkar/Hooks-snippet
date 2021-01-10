//tick function increment the count value setInterval is a  js function  
import React, { useState , useEffect } from 'react'

function DependenciesUseeffect() {
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(count+1)
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)  
        return () => {
            clearInterval(interval)    //cleaanup
        }
    }, [count])   //dependency must to  work if its empty execute once and stop i.e. 1 as a output
    return (
        <div>
            <h2> {count}</h2>
        </div>
    )
}

export default DependenciesUseeffect
