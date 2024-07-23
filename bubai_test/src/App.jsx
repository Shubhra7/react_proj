import './App.css'
import InputBox from './components/InputBox'
import { useState,useCallback } from 'react'

function App() {
  let [value1, setValue1] = useState(0);
  let [value2, setValue2] = useState(0);

  const kalu = () =>{
        setValue1(value2)
        setValue2(value1)
  }


  return (
    <>
    <div className='deb'>
      <h1>Check</h1>
      <form id="frm" onSubmit={
        (e)=>{e.preventDefault()}
        }>
      <InputBox
      name="First"
      value={value1}
      setValue={(current)=>setValue1(current)}
       />
      
      <InputBox
      name="Second"
      value={value2}
      setValue={(current)=>setValue2(current)}
       />
      
      <button
      type='submit'
      onClick={kalu}
      >Swap</button>

      </form>
    </div>

    </>
  )
}

export default App
