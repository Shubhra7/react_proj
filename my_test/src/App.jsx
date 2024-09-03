import { useState } from 'react';
import './App.css';
import Addition from './Components/Addition';

function App() {
  var inp = 1;
  
  const [data, setData] = useState(0);
  const [value, setValue] = useState(1);
  const [value7, setValue7] = useState(0);
  const [kalu, setKalu] = useState('Shubhra');

  const dada = () => {
    setKalu("Bubai is best");
    console.log("Bubai1");
  };

  const handleInputChange = (e) => {
    // Separate the calls into a function
    dada();
    console.log("hello");
    setValue(parseInt(e.target.value) + 1);
    // alert("Pop");
  };

  return (
    <>
      <h2>{kalu}</h2><br/><br/>
      <h1> hello </h1>
      <button onClick={() => setData(data + 1)}>click me {data}</button>
      <br></br>
      <input
        placeholder='enter a number'
        onChange={handleInputChange}
      />
      <button>The entered value is: {value}</button>
      <button>The entered value is: {data}</button>
      <br/><br/>
      <Addition value7={value7} valueChange={(amount) => setValue7(amount * 10)} />
    </>
  );
}

export default App;
