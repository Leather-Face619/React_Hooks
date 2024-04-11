"use client"
import React from 'react';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import WindowSize from './Components/WindowSize';
import UseRef from './Components/UseRef';
import UseReducer from './Components/UseReducer';
import UseLayoutEffect from './Components/UseLayoutEffect';
import UseMemo from './Components/UseMemo';
import UseCallback  from './Components/UseCallback';
import CustomHook from './Components/CustomHook';
function App() {
  return (<>
     <CustomHook/>
    {/* <WindowSize/> */}
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}
    {/* <UseLayoutEffect/> */}
    {/* <UseMemo/> */}
    {/* <UseCallback/> */}
  </>
  )
}
/* useCallback: Is hook se aap function definition ko cache kar sakte hain, taki optimized component ko pass kar sakein

useMemo: Is hook se aap expensive calculations ka result cache kar sakte hain, taki re-rendering performance optimize ho.

useEffect: Is hook se aap component ko external systems se connect kar sakte hain. Yeh network calls, animations, aur non-React code ke saath synchronize karne mein madad karta hai. */ 
export default App;