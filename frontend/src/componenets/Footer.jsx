

import { PiInstagramLogoDuotone } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import {  FaFacebookF, FaLinkedin, FaTelegramPlane, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footermain lg:flex lg:justify-center lg:items-center bg-[#100f1f] text-white min-h-[600px]">
                <div className="container lg:grid lg:grid-cols-4 p-2 lg:px-20">
                    <div className="first flex flex-col gap-2 lg:w-[400px] ">
                        <div className="logo p-1">
                            <img src="/images/kgs.png" className=' h-40' alt="" />
                        </div>
                        <div className="text p-1">
                            <p>KGS is the Most Trusted Learning Platform. Download our app to start learning</p>
                        </div>
                        <div className=' flex items-center justify-left gap-10 mt-5 '>
                            <div className="googlepay flex bg-[#021f35] pr-4 py-2 rounded-[5px]">
                                <div className="icon flex justify-center items-center px-4">
                                    <img src="/images/playstore.png" alt="" />
                                </div>
                                <div>
                                    <div className='text-[0.9em]'>GET IT ON</div>
                                    <div className='text-[0.9em] font-extrabold'>Google Pay</div>
                                </div>
                            </div>
                            <div className="appstore flex bg-[#021f35] pr-4 py-2 rounded-[5px]">
                                <div className="icon flex justify-center items-center px-4">
                                    <img src="/images/applestore.png" alt="" />
                                </div>
                                <div>
                                    <div className='text-[0.9em]'>GET IT ON</div>
                                    <div className='text-[0.9em] font-extrabold'>App Store</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 text-xl text-white mt-5'>
                            <Link to="#" className=" hover:bg-blue-600 transition-all ease-in-out duration-500 cursor-pointer bg-[#1e1d2f] rounded-[5px] p-2 youtube"><FaYoutube /></Link>
                            <Link to="#" className=" hover:bg-blue-600 transition-all ease-in-out duration-500 cursor-pointer bg-[#1e1d2f] rounded-[5px] p-2 twitter"><FaTwitter /></Link>
                            <Link to="#" className=" hover:bg-blue-600 transition-all ease-in-out duration-500 cursor-pointer bg-[#1e1d2f] rounded-[5px] p-2 insta"><PiInstagramLogoDuotone /></Link>
                            <Link to="#" className=" hover:bg-blue-600 transition-all ease-in-out duration-500 cursor-pointer bg-[#1e1d2f] rounded-[5px] p-2 facebook"><FaFacebookF /></Link>
                            <Link to="#" className=" hover:bg-blue-600 transition-all ease-in-out duration-500 cursor-pointer bg-[#1e1d2f] rounded-[5px] p-2 linked"><FaLinkedin /></Link>
                            <Link to="#" className=" hover:bg-blue-600 transition-all ease-in-out duration-500 cursor-pointer bg-[#1e1d2f] rounded-[5px] p-2 telegram"><FaTelegramPlane /></Link>
                        </div>
                    </div>
                    <div className="second lg:ml-32">
                        <h1 className='transition-all duration-500 ease-in-out cursor-pointer font-bold text-[1.1em]'>Explore</h1>
                        <ul className=' flex flex-col gap-4 p-2'>
                            <Link to="#" className='transition-all duration-500 ease-in-out cursor-pointer hover:text-blue-900 text-[0.9em]'>Blog</Link>
                            <Link to="#" className='transition-all duration-500 ease-in-out cursor-pointer hover:text-blue-900 text-[0.9em]'>About Us</Link>
                            <Link to="#" className='transition-all duration-500 ease-in-out cursor-pointer hover:text-blue-900 text-[0.9em]'>Contact Us</Link>
                            <Link to="#" className='transition-all duration-500 ease-in-out cursor-pointer hover:text-blue-900 text-[0.9em]'>Career</Link>
                            <Link to="#" className='transition-all duration-500 ease-in-out cursor-pointer hover:text-blue-900 text-[0.9em]'>FAQs</Link>
                            <Link to="#" className='transition-all duration-500 ease-in-out cursor-pointer hover:text-blue-900 text-[0.9em]'>Ask Doubts</Link>
                        </ul>
                    </div> 
                    <div className="third lg:mx-[-10px]">
                        <h1 className='font-bold text-[1.1em]'>Links</h1>
                        <ul className='flex flex-col gap-4 p-2'>
                            <Link to="#" className=' cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-900 text-[0.9em]'>All Courses</Link>
                            <Link to="#" className=' cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-900 text-[0.9em]'>Exam Syllabus</Link>
                            <Link to="#" className=' cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-900 text-[0.9em]'>Gallery</Link>
                            <Link to="#" className=' cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-900 text-[0.9em]'>Khan Global Studies - <br /> Android App</Link>
                            <Link to="#" className=' cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-900 text-[0.9em]'>Khan Global Studies - IOS <br /> App</Link>
                            <Link to="#" className=' cursor-pointer transition-all duration-500 ease-in-out hover:text-blue-900 text-[0.9em]'>Feedback Form</Link>
                        </ul>
                    </div>
                    <div className=' flex flex-col gap-4 lg:ml-[-120px]'>
                        <h1 className='font-bold text-[1.1em] '>Address</h1>
                        <div className=' flex justify-center'>
                            <div>
                                <IoLocationOutline className=' m-1 text-xl' />
                            </div>
                            <div>
                                <p className=' text-[0.9em]'>Khan Global Studies Pvt. Ltd. 5th Floor, A13A, Graphix 1 Tower B, Sector 62, Noida, Uttar Pradesh 201309</p>
                            </div>
                        </div>
                        <div className=' flex'>
                            <div>
                                <AiOutlineMail className=' m-1 mx-2 text-xl' />
                            </div>
                            <div>
                                <p className='transition-all duration-500 ease-in-out text-[0.9em] cursor-pointer hover:text-blue-900'>enquiry@khanglobalstudies.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;