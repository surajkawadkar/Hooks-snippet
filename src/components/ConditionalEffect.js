import React ,{useEffect, useState}from 'react'

function ConditionalEffect() {

    //useffect call after eery single render it may cause performance problem so we use conditional use effect
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    useEffect(() => {
        console.log("effect calls");
        document.title = `You clicked ${count} times`;      
      },[count]);   // second parameter is array it conain state or props when it chanages then only useeffect execute its a optimal increase performance
    return (
        <div>
             <p>You clicked {count} times</p>
             <input type="text" onChange = {e=>setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
            
        </div>
    )
}

export default ConditionalEffect
