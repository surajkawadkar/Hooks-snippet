import React, {useState, useEffect} from 'react'
//not working
function Useeffect() {
    const [count,setCount] = useState(0)


    const handleClick = (e) =>{
        setCount(count+1)

    }

    useEffect(() => {
        document.title =  {count}
        
    } )



    // useEffect(()=>{ 
    //     document.title = 'you are clicked ${count} times'
    // })
   
    return (
        <div>
            <button type="button" onClick={handleClick}>count {count}</button>
        </div>
    )
}

export default Useeffect
