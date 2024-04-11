import React, { useEffect, useState } from 'react'
import useCus from './useCustomhook/useCus'
const CustomHook = () => {
    const [first, setfirst] = useState(0)
// Custom Hook
    useCus(first)
  return (
    <div>
        <h1>{first}</h1>
        <button className=' my-5 border-2 ' onClick={()=>{setfirst(first+1)}}>Click me </button>
    </div>
  )
}

export default CustomHook