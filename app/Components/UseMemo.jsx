import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [num, setNum] = useState(10)
    const [show, setShow] = useState(false)

    const getVal = () => {
        return setNum(num + 1)
    }

    const countNum = (num) => {
        console.log(num)
        for (let index = 0; index < 999999999; index++) { }
        return num
    }
    const CheckData = useMemo(() => { 
        return countNum(num)
    },[num])
    return (
        <>
<button onClick={getVal}> Click me </button>
<p className='text-4xl'>Number is = <span className=' text-green-600 '>{ CheckData}</span></p>
<button onClick={() => {setShow(!show) }} className=' text-4xl'>{show ? "please Click me":"Click me please"}</button>


        </>
    )
}

export default UseMemo