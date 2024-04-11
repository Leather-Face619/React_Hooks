import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // useRef: Is hook se aap DOM nodes ya timeouts jaise information ko hold kar sakte hain. Refs ko update karne se component re-render nahi hota. refs hamesa ak object return karta hai 
    
    const cha = useRef()
   const num = useRef(0)
   //console.log(num);
    const [userInput, setuserInput] = useState('')
    useEffect(() => {
        document.title = num.current
   
    num.current = num.current + 1 
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
         else if (a==1) {
            cha.current.focus()
            cha.current.style.backgroundColor="Green"
            a=2
        } 
        else {
            cha.current.focus()
            cha.current.style.backgroundColor=""
            a=0
        }
        
     }
  return (
   <>
   <div className='w-52 h-52 border-green-700 h-30 w-1/2' ref={cha}></div>
   <button className='my-3 ' onClick={chbg}>Change</button> <br />
<input type="text" value={userInput} onChange={e=>{setuserInput(e.target.value)}} />
   <h1> Total render is = {num.current}</h1>
   </>
  )
}

export default UseRef