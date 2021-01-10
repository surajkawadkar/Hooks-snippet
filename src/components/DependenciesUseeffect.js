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
        //insted of tick we caan use count too in dependency array
    }, [tick])   // dependency array count it rerendere when the count value changes , if it is empty we ignore the changes which is incorect
    return (
        <div>
            <h2> {count}</h2>
        </div>
    )
}

export default DependenciesUseeffect
