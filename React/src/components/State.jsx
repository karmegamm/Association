import React, { useState } from 'react';
import ChildComponent from './Props';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild ] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const toggleChild = () => {
    setShowChild(!showChild);
  }

  //conditional rendering

//   if(showChild) {
//     return (
//         <div>
//             <button onClick={toggleChild}>Hide</button>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//             <ChildComponent count={count}/>
//         </div>
//     );
//   }
//   else {
    return (
        <div>
            <button onClick={toggleChild}>Show</button>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
//   }
};

export default Counter;
