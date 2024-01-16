"use client"
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    var [num, setNum] = useState(0)
    useEffect(() => {
      document.title = num
    
      
    },[num])
    
    return (
        <div>
            <button onClick={()=>setNum(num+1)} className=' font-extrabold text-5xl p-2 '  >+</button>
            <p>num = {num}</p>
            <button onClick={()=>setNum(num-1)} className=' font-extrabold text-5xl p-2 '>-</button>

        </div>
    )
}

export default UseEffect