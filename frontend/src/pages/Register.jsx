import Breadcrumb from "../componenets/Breadcrumb"
import InputField from "../componenets/InputField"
import SubmitBtn from "../componenets/SubmitBtn"
import { Link } from "react-router-dom"
import {Helmet} from 'react-helmet'

export default function Register() {

  
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Sign-Up | KGS</title>
        </Helmet>
            <Breadcrumb data={{ title: "Join Khan Global Studies" }} />
            <div className="registerPage bg-white min-w-full flex items-start p-11 justify-center min-h-[500px] ">

                <div className="registerFormWrapper p-11 grid gap-3 max-w-[750px] shadow-shadow-2 rounded-lg">
                    <h1 className="  w-full text-center text-2xl ">Enroll now to learn LIVE Online from India's best teachers</h1>
                    <form id="register min-w-full">
                        <div className="inputsWrapper grid gap-5">
                            <InputField data={{ label: "Name", name: "name", type: "text", placeholder: "Full Name" }} />
                            <InputField data={{ label: "Email", name: "email", type: "email", placeholder: "Email" }} />
                            <InputField data={{ label: "Phone", name: "phone", type: "text", placeholder: "Phone Number" }} />
                            <InputField data={{ label: "Password", name: "password", type: "text", placeholder: "Password" }} />
                            <InputField data={{ label: "Confirm Password", name: "confirm_password", type: "text", placeholder: "Confirm Password" }} />
                        </div>

                        <p className="py-5 text-gray-500">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>
                        <SubmitBtn title= {"Register"} />
                    </form>
                    <div className="alreadyAccount grid place-items-center py-8">
                        <Link to="/login" className=" text-blue-900 transition-all hover:text-blue-600"><span className=" text-gray-500">Already Account? </span>Login Now</Link>
                    </div>
                </div>

            </div>
        </>
    )
}
