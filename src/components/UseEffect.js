import React, { useState, useEffect } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;  // this is tilt sigh right above the caps lock button
      });
    return (
        <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
    )
}

export default UseEffect
