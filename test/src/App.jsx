import { useState,useCallback,useEffect,useRef } from 'react';
import React from 'react';

function App() {

  const passwordRef = useRef(null);

  let [password, setPassword] = useState("kalu");
  let [length, setLength] = useState(8)
  let [numberAllowed, setNumberAllowed] = useState(false)

  const copyPassword =useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  const handle = (e) =>{
    setPassword(e.target.value)
  }
  

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-8 text-orange-500
       bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg 
        overflow-hidden mb-6">
        <input 
          type='text'
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder='Password'
          onChange={handle}
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>
          copy
        </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className=''
              onChange={(e)=>{setLength(e.target.value)}}
            />
              <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
        </div>
       </div>
     

    </>
  )
}

export default App
