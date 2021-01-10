import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetchingAPI() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(" https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            setPosts(response.data)
            console.log(response);
        })
        .catch("err")
    },[])  // dependency array fr stop go into infinite loop
    
    return (
        <div>
           <ul>
               {
                   posts.map(post =><li key={post.id}>{post.title}</li>)
               }
           </ul>
        </div>
    )
}

export default DataFetchingAPI
