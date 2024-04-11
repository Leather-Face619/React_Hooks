import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseState from './UseState'
// useLayoutEffect runs synchronously after a render but before the screen is updated
//useEffect runs asynchronously and after a render value printed to the  screen   
const UseLayoutEffect = () => {
    const [num, setnum] = useState(0)
  
    // useEffect(() => {
    // if (num ===0 ) {
    //     setnum(num + Math.random()*100)
    // }
    
    // }, [num])
    useLayoutEffect(() => {
    if (num ===0 ) {
        setnum(num + Math.random()*100)
    }
    
    }, [num])
    
  return (
 <>
 <h1>Numder is = {num}</h1>
 <button onClick={()=>setnum(0)}> Click me</button>
 </>
  )
}

export default UseLayoutEffect