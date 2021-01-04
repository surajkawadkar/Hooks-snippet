import React , {useState} from 'react'

function NameObject() {
    const [name, setName] = useState({firstName:"", lastName:""})
    //const  a , b;
    return (
        <div>
            <form>
                <label>Name</label>
            <input type= "text"
            value={name.firstName}
            placeholder="name"
            onChange={e=>setName({...name, firstName: e.target.value})}   //... is a spread operator use when we want to push the element into the array but here we are  making a replica and then updaate the name object 
            />

            
            <br></br>  
            <label>lastName</label>
            <input type="text"
            placeholder="lastname"
            value={name.lastName}
            onChange={e=>setName({...name, lastName:e.target.value})   }
            />
            <br/>
            <button type="submit">submit</button>
     </form>
     <div>
      <h2>{name.firstName}</h2>
     
     <h2>{name.lastName}</h2>   
     <h1>{JSON.stringify(name)}</h1>    
     {/* JSON.stringify return the object in json format */}
     {/* difference between class state and usestate is class state merge the state automatically while usestate we have to do ut manually */}

     </div>
           
           
          
        </div>
    )
}

export default NameObject
