import React, { useEffect, useState } from 'react'
//Width
function WindowSize() {
    const [Win, setWin] = useState(window.screen.width)

    const currentScreenWidth = ()=>{
        setWin(window.innerWidth)
       
    }   
//Height
    const [Wins, setWins] = useState(window.screen.height)

    const currentScreenHeight = ()=>{
        setWins(window.innerHeight)
       
    }   

    useEffect(() => {
      window.addEventListener("resize",function() {
        currentScreenWidth();
        currentScreenHeight();
      })
      // window.addEventListener("resize",currentScreenHeight)
      // window.addEventListener("resize",currentScreenWidth)
      return ()=>{

            window.removeEventListener("resize",function() {
              currentScreenWidth();
              currentScreenHeight();
            })
            
      }
    
      
    })
    
  return (
    <div className='font-3xl '> Your Window width is = {Win} height =  {Wins} </div>
  )
}

export default WindowSize