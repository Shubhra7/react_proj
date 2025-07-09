import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import { login as authLogin } from "../store/authSlice"
import {Button, Input, Logo} from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //  register help in fetch the form value and pass automatically. So don't need to manually pass the each value
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data)=>{
        console.log("From Login.jsx: check register-data-of-react-hook-form: ",data);
        
        setError("")
        try {
            const session = await authService.login(data) // using appwrite doing login
            if (session) { // if the login successfully then store the value in Redux-store
                const userData = await authService.getCurrentUser() // taking userData from appwrite
                if(userData){
                    dispatch(authLogin(userData))
                }
                navigate("/") // after login just place the user to root page
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center w-full">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                     <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold"> 
                Sign in to your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">
                {error}
            </p>}
            {/* as we used rect-hook-form so by default they give handleSubmit see in top lines and then pass out login method inside that handleSubmit method */}
            {/* React hook form help in submitting values automatically without manually pick up by this technqiue */}
            <form onSubmit={handleSubmit(login)} className="mt-8">
                <div className="space-y-5">
                    <Input
                    label="Email: "
                    placeholder="Enter your email"
                    type="email"
                    //  react-hook-form==> it's register will handle the data and store in it as the key of "email". Validation regexP search
                    {...register("email",{
                        required: true,
                        validate: {
                            matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be a valid address",
                        }
                    })} 
                    />
                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password",{
                        required: true,
                    })}
                    />
                    <Button 
                    type="submit"
                    className="w-full"
                    >
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Login