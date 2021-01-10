import React ,{useContext} from 'react'
import { userContext } from './ComponentC'

function ComponentF() {
  const user = useContext(userContext)
    return (
        <div>
            {user}
            componet F
        </div>
    )
}

export default ComponentF
