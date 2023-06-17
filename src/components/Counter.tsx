import {useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState<number>(0)
  return (
  <>
  <h3>Count is {count}</h3>
  <button onClick={()=>setCount(count + 1)}>+</button>
  <button onClick={()=>setCount(count - 1)}>-</button>
  </>
  )
}

export default Counter