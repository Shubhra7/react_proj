import React from 'react'


const Input_cal = ({
    inv,
    setInv
}) => {
  return (
    <>
        <div><b>Input</b></div>
        <input
        type='text'
        value={inv}
        onChange={(e)=> setInv(Number(e.target.value))}
         />
    </>
  )
}

export default Input_cal