import React, {useState} from 'react'

function Array() {
    const [items, setItems] = useState([])


    const handleSubmit = e =>{ setItems({items:[...items, e.target.value]})
    console.log(e.target.value);

    }

    return (
        <div>
            <input type="text"
            value ={items}
            placeholder="item name"
            
             />
             <button type="submit" onClick={handleSubmit} >submit</button>
            <h2>{[...items]}</h2>

            <div>
                <ul>
                    {
                        items.map(item=><li key = {item.id}>{item.value}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Array
