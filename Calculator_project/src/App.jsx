import './App.css'
import { useEffect,useCallback,useState } from 'react'
import Input_cal from './components/Input_cal'


function App() {
    let [first, setFirst] =useState(0)
    let [second, setSecond] = useState(0)
    let [add, setAdd] = useState(0);

    const swap = () =>{
      setFirst(second)
      setSecond(first)
    }

    const sum = useCallback(()=>{
      setAdd(first + second)
    },[first,second])

    useEffect(()=>{
      sum()
    },[first,second,sum])

  return (
    <>
      <div  id="cal">
        <Input_cal
      inv={first} 
      setInv={(value) => setFirst(value)}
      />
      <p>The entered value is: {first}</p>
      <hr />

      <Input_cal
      inv={second}
      setInv={(value) => setSecond(value)}
       />
      <p>The entered value is: {second} </p>

      <hr />
      <button
       onClick={swap}
      >Swap</button>

      <hr />
      <p>The sum is: {add}</p>
        </div>
    </>
  )
}

export default App
