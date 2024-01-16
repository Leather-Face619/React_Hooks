import React, { useEffect, useState } from 'react'

function WindowSize() {
    const [Win, setWin] = useState(window.screen.width)

    const currentScreenWidth = ()=>{
        setWin(window.innerWidth)
       
    }   

    useEffect(() => {
      window.addEventListener("resize",currentScreenWidth)
      return ()=>{

            window.removeEventListener("resize",currentScreenWidth)
      }
    
      
    })
    
  return (
    <div className='font-3xl'> Your Window width is = {Win} height =  {window.screen.height} </div>
  )
}

export default WindowSize