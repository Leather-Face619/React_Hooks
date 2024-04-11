import {useEffect} from "react";


const useCus = (count) => {
    useEffect(()=> {
        document.title = `chats (${count})`
       },[count])
  return (
    <div>useCus</div>
  )
}

export default useCus