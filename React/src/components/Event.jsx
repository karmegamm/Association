import React, { useState } from 'react'

export function Event(){
  
 const [data,setData]=useState(0)
 const [inputValue, setInputValue] = useState('')
 const [clickCount, setClickCount] = useState(0);
 const [isFocused,setIsFocused]=useState(false)


  const update=()=>{
    setData(data =>data + 1)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clickChange=()=>{
    setClickCount(count=>count+1)
  }

  const handleFocus=()=>{
    setIsFocused(true)
  }

  const handleBlur=()=>{
    setIsFocused(false)
  } 
    
  return (
    <div>
         <button onClick={update}>click</button>
         <p>single click:{data}</p>
    
         <input type="text" value={inputValue} onChange={handleChange} />
         <p>Input value: {inputValue}</p>

         <button onDoubleClick={clickChange}>double-click</button>
         <p>double click:{clickCount}</p>

         <input 
            type="text" 
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={isFocused?'Focused':'NotFocused'}
        />
    </div>
       
  )
}

export default Event