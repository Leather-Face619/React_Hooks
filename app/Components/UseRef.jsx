import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const cha = useRef()
   // const num = useRef(10)
    // const [num, setNum] = useState(0)
    useEffect(() => {
   // setNum(num +1)
    // num.current = num.current + 1 
      
    })
    
    var a =0
    const chbg = ()=>{
        if (a==0) {
            cha.current.focus()
        cha.current.style.backgroundColor="blue"
        a=1
        } else if (a==1) {
            cha.current.focus()
            cha.current.style.backgroundColor="red"
            a=2
        } 
        else {
            cha.current.focus()
            cha.current.style.backgroundColor="Green"
            a=0
        }
        
    }
  return (
   <>
   <div className=' w-52 h-52 border-green-700 ' ref={cha}></div>
   <button onClick={chbg}>Change</button>
   {/* <h1> Numder is = {num}</h1> */}
   </>
  )
}

export default UseRef