import React, { useEffect, useLayoutEffect, useState } from 'react'
import UseState from './UseState'

const UseLayoutEffect = () => {
    const [num, setnum] = useState(0)
  
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