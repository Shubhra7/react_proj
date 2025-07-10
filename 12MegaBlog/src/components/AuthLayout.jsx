import React,{useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Protected({ children,  authentication = true }){

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    // checking authentication and loged-in status
    // as we can show them loading or component, helpful during routing 

    // this two check for unwanted cases, for normal cases it will passed and route will go to written component
    useEffect(()=>{
        // when autentication said right but mismatch with Redux-store status then better login once bro

        if(authentication && authStatus !== authentication){
            navigate("/login")

        // authertication and this matched with Redux-Strore auth then go home page and act like real user

        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])
 
  return loader ? <h1>Loading...</h1> : <>{children}</>
}
