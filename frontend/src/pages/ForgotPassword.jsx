/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import Breadcrumb from "../componenets/Breadcrumb";
import InputField from "../componenets/InputField";
import SubmitBtn from "../componenets/SubmitBtn";
import { Link } from "react-router-dom";

import {Helmet} from 'react-helmet'

export default function ForgotPassword() {


    return (
        <>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Forgot Password | KGS</title>
        </Helmet>
            <Breadcrumb data={{ title: "Reset Your Password" }} />
            <div className="forgotPage bg-white min-w-full flex items-start p-11 justify-center min-h-[500px] ">

                <div className="loginFormWrapper p-11 grid gap-7 max-w-[750px] sm:min-w-[750px] shadow-shadow-2 rounded-lg">
                    <h1 className="  w-full text-center text-2xl ">Reset Your Password!</h1>
                    <form id="forgot min-w-full">
                        <div className="inputsWrapper grid gap-5">

                            <InputField data={{ label: "Email", name: "email", type: "email", placeholder: "Email" }} />
                            

                        </div>

                        
                        <div className="submit py-7">
                        <SubmitBtn title={"Send OTP"}  />
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
