import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout()
            .then(()=> {
                // used logout() not only logout because redux want the object not the function, redux cant handle the function definition it need the object
                dispatch(logout())
            })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >
        Logout
    </button>
  )
}
export default LogoutBtn