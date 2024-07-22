import './App.css'
import InputForm from './components/InputForm'

import { useCallback,useEffect,useState } from 'react'

function App() {
  let [value, setValue] = useState(0)
  let [scvalue, setScvalue] = useState(2)
  let [add,setAdd] = useState(0)

  const sum = useCallback(()=>{
    setAdd(value + scvalue)
  }, [value, scvalue])

  useEffect(()=>{
    console.log("hi bubai!");
    sum()
  },[scvalue,value,sum])

  const swap = () =>{
    setValue(scvalue)
    setScvalue(value)
  }

  return (
    <>
      <p>Welcome to my from!!</p>
      <InputForm kalu="bubai" golu="Shubhra"
       value={value}
       setValue12={(value)=> setValue(value)}
       />
       <p>The first column value: {value}</p>

       <hr></hr>

       <InputForm
       kalu="Tutai" golu="Debjit"
       value={scvalue}
       setValue12={(value)=>setScvalue(value)}
        />

        <p>The second column value: {scvalue}</p>

        <hr></hr>
        <button
        onClick={swap}
        >Swap</button>
        <hr />
        <p>The addition value is: {add}</p>
    </>
  )
}

export default App
