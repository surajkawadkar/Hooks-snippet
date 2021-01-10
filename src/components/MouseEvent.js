import React , {useState, useEffect} from 'react'

function MouseEvent() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePositon = e => {
        setX(e.clientX)
        setY(e.clientY)
        console.log("event")
    }
    useEffect(()=>
    {console.log("useeffect called");
    window.addEventListener('mousemove',logMousePositon)
    },[ ])  //empty brancket make it execute only once just like component did mount
    
    return (
        <div>
            Hooks X-{x} Y- {y}
        </div>
    )
}

export default MouseEvent
