"use client"
import React, { useState } from 'react'
const UseState = () => {
  // useState: Is hook se aap component mein state variable declare kar sakte hain, jise aap seedhe update kar sakte hain
    const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={function () {
          setIsShown(false)
        }}>
        Hover over me!
      </button>
      {isShown  && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
    </div>
  );
}

export default UseState