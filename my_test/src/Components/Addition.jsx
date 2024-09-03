import React from 'react'

const Addition = ({
    value7,
    valueChange
}) => {
  return (
    <>
        <div>Shubhrajit components here</div>
        <button>Number: </button>
        <input placeholder='enter value' onChange={(e)=>valueChange 
        && valueChange(parseInt(e.target.value))}/>
        <button>{value7}</button>
    </>
  )
}

export default Addition