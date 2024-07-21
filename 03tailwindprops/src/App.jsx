
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    Name:"bubai",
    age:22
  }
  let myArr = [1,2,3,4];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
      Tailwind Test</h1>
        <Card username="Bubai" obj={myObj} arr={myArr} btnText="Click me" />
        <Card username="Shubhra" btnText="vist me" />

    </>
  )
}

export default App
