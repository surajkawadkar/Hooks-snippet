import React from 'react'
import ComponentD from './ComponentD'
 export const userContext = React.createContext()
function ComponentC() {
    return (
        <div>
            <userContext.Provider value ={'value passing from component C '}>
            <ComponentD/>
            </userContext.Provider>
           
        </div>
    )
}

export default ComponentC
