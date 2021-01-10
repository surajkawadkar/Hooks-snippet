//for toggle we used previos file  and perform toggle operation
import React,{useState} from 'react'
import MouseEvent from './MouseEvent'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)} >Toggle button</button>
            {display && <MouseEvent/> }
            
        </div>
    )
}

export default MouseContainer
