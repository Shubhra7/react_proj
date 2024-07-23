import React from 'react'

const InputBox = ({
    name,
    value,
    setValue
}) => {
  return (
    <>
        {/* <div>InputBox </div> */}
        Enter the {name} value: <input type='text'
            value={value}
            onChange={(e)=>setValue(Number(e.target.value))}
        />
        <p>Your Entered value: {value}</p>

    </>
  )
}

export default InputBox