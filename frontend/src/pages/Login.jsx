import Breadcrumb from "../componenets/Breadcrumb";
import InputField from "../componenets/InputField";
import SubmitBtn from "../componenets/SubmitBtn";
import { Link } from "react-router-dom";
import { useState } from 'react'

export default function Login() {

    const [fPasswordW, setFPasswordW] = useState('0')


    return (
        <>
            <Breadcrumb data={{ title: "Login" }} />
            <div className="loginPage bg-white min-w-full flex items-start p-11 justify-center min-h-[500px] ">

                <div className="loginFormWrapper p-11 grid gap-7 max-w-[750px] shadow-shadow-2 rounded-lg">
                    <h1 className="  w-full text-center text-2xl ">Login to access the courses and materials</h1>
                    <form id="login min-w-full">
                        <div className="inputsWrapper grid gap-5">

                            <InputField data={{ label: "Email", name: "email", type: "email", placeholder: "Email" }} />
                            <InputField data={{ label: "Password", name: "password", type: "text", placeholder: "Password" }} />

                        </div>

                        <div className="options py-7 flex items-center justify-between">
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="rememberMe">
                                    <input type="checkbox"
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purple-900 checked:bg-purple-900 checked:before:bg-purple-900 hover:before:opacity-10"
                                        id="rememberMe" name="rememberMe" />
                                    <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </label>
                                <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="rememberMe">
                                    Remember Me
                                </label>
                            </div>

                            <div onMouseEnter={() =>{setFPasswordW('full')}} onMouseLeave={() =>{setFPasswordW('0')}}   className="forgetPassword">
                                <Link to="/forget-password" className=" text-purple-950 hover:text-blue-900 transition-all">Lost your password?</Link>
                                <div className={`w-${fPasswordW} transition-all h-[2px] rounded-3xl bg-blue-800  `}></div>
                            </div>
                        </div>
                        <div className="submit py-3">
                        <SubmitBtn title={"submit"}  />
                        </div>
                        
                    </form>
                    <div className="alreadyAccount grid place-items-center py-8">
                        <Link to="/sign-up" className=" text-blue-900 transition  hover:text-blue-600"><span className=" text-gray-500">Don't Have An Account  </span>Register Now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
