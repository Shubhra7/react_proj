import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] =useState(5); // 5 is default value
  // counter and setCounter is name, Can be any name to use

  // let counter = 5;

  const addValue = () =>{
    if( counter <10){
      counter = counter + 1;
      setCounter(counter);    //setCounter to update the value in UI also
      // console.log("clicked",Math.random());
    } else{
      alert("Goes more than 20");
    }
 
  }

  const removeValue =()=>{
    if (counter > 0){
      setCounter(counter-1);
    }else{
      alert('Goes to negative');
    }
  
  }

  return (
    <>
     <h1>Counter making</h1>
     <p>Within 0 to 10</p>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>
     Add value {counter}</button>
     <br/>
     <button onClick={removeValue}>
     Decrease value {counter}</button>
    </>
  )
}

export default App
