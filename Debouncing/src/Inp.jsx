import React, { useEffect, useState } from 'react'

const Inp = () => {
    const [query,setQuery] = useState("")
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(query){
                console.log("Searching for: ",query);
            }
        },500);

        return ()=>clearTimeout(timer);
    },[query])
  return (
    <input type="text" 
    placeholder='search'
    onChange={(e)=> setQuery(e.target.value)}/>
  )
}

export default Inp
