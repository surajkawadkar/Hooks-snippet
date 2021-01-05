import React, {useState} from 'react'
// doesnt work
function Array() {
    const [items, setItems] = useState([])
    const [element, setElement] = useState("")


    const handleSubmit = (e) =>{ 
        e.preventDefault(); 
         setItems([...items,element])
         
         
        
        
    }
    return (
        <div>
            <input type="text"
           value ={element}
            placeholder="item name"
            onChange={e=> setElement(e.target.value)}
            
             />
           
            
             <button type="submit" defaultValue="Reset" onClick={handleSubmit} >submit</button>
          

            <div>
                
                <ul>
                    {
                        items.map((item,index)=><li key = {index} >{item}</li>)
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