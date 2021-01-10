//get the data from component c to compinent f using cotext
import React from 'react'
import { userContext } from "./ComponentC";

function ComponentF() {
    return (
        <div>
            <userContext.Consumer>
               { user =>{
                    return <div>
                        user context value is {user}
                    </div>
                }}
            </userContext.Consumer>
            component f
        </div>
    )
}

export default ComponentF
