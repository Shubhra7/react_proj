import React, { useEffect, useState } from 'react'

const AgeCheck = () => {
    const [age,setAge] = useState(0);
    useEffect(()=>{
        const timer= setTimeout(()=>{
            if(age>20){
                alert('Age should be under 15');
            }
        },500)

        return ()=> clearTimeout(timer);
    },[age])
  return (
    <div>
      <input type="text"
      placeholder='Enter the age'
      onChange={(e)=> setAge(parseInt(e.target.value) || 0)} />
    </div>
  )
}

export default AgeCheck
