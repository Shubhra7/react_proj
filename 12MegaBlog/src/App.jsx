import { useEffect, useState } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() { 
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(()=>{
    // Take appwrite service (getCurrentUser)
    // Then use my redux authSlice for dispatch the login() to store in "store"
    authService.getCurrentUser()
          .then((userData) => {
            if(userData){
              dispatch(login({userData}))
            } else {
              dispatch(logout())  // logout from state don't call appwrite logout service
            }
          })
          .finally(()=> setLoading(false))
  },[])

  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ) : (
    <div> Loading..... </div>
  )
}

export default App
