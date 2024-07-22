import React from 'react'
import { useEffect,useState } from 'react'

const InputForm = ({
    kalu,
    golu,
    value,
    setValue12,
}) => {
  return (
    <>
            <div>InputForm</div>
            <p>{`Here is ${kalu} and ${golu} = `}{value}</p>
            <input
             type='text'
             value={value}
             onChange={(e) => setValue12(Number(e.target.value))}
             
             required
            ></input>
    </>
  )
}

export default InputForm