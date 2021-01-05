import React, {useState} from 'react'
// doesnt work
function Array() {
    const [items, setItems] = useState(["hii","hey"])
    const [element, setElement] = useState("")


    const handleSubmit = () =>{  
         setItems([...items,element])
         
        
        
    }
    return (
        <div>
            <input type="text"
           //value ={element}
            placeholder="item name"
            onChange={e=> setElement(e.target.value)}
            
             />
           
            
             <button type="submit" onClick={handleSubmit} >submit</button>
          

            <div>
                <h2>{items}</h2>
                <ul>
                    {
                        items.map(item=><li >{item}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Array

//syntax of map
// Array.map((element,index)=>{
//     <li key={index}>{element}</li>
//  })