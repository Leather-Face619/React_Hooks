import React, { useEffect, useReducer, useState } from 'react'

var initial = 0
const UseReducer = () => {
    const render = (state,action)=>{
if (action.type === "inc" ) {
    return state = state +1
} else if (action.type === "dec") {
    return  state = state -1
    
} 
return state
    }
    const [state, dispatch] = useReducer(render, initial)

    useEffect(() => {
        document.title = state + " | Title nahi hai"


    },[state])

    return (
<>
<head>
   
    <link rel="icon" href=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png" />
   
</head>

        <div>
            <button onClick={() => dispatch({ type: "inc" })} className=' font-extrabold text-5xl p-2 '  >+</button>
            <p>num = {state}</p>
            <button onClick={() => dispatch({ type: "dec" })} className=' font-extrabold text-5xl p-2 '>-</button>

        </div>
</>
    )

}

export default UseReducer