
import React from 'react';
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaInstagram, FaFacebookF, FaLinkedin, FaTelegramPlane, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer(props) {
    return (
        <>
            <div className="footermain flex justify-center items-center bg-[#100f1f] text-white min-h-[600px]">
                <div className="container grid grid-cols-4 border">
                    <div className="first border flex flex-col gap-2">
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
                                    <div>GET IT ON</div>
                                    <div>Google Pay</div>
                                </div>
                            </div>
                            <div className="appstore flex bg-[#021f35] pr-4 py-2 rounded-[5px]">
                                <div className="icon flex justify-center items-center px-4">
                                    <img src="/images/applestore.png" alt="" />
                                </div>
                                <div>
                                    <div>GET IT ON</div>
                                    <div>App Store</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 text-xl text-white mt-5'>
                            <div className=" bg-[#1e1d2f] rounded-[5px] p-2 youtube"><FaYoutube /></div>
                            <div className=" bg-[#1e1d2f] rounded-[5px] p-2 twitter"><FaTwitter /></div>
                            <div className=" bg-[#1e1d2f] rounded-[5px] p-2 insta"><PiInstagramLogoDuotone /></div>
                            <div className=" bg-[#1e1d2f] rounded-[5px] p-2 facebook"><FaFacebookF /></div>
                            <div className=" bg-[#1e1d2f] rounded-[5px] p-2 linked"><FaLinkedin /></div>
                            <div className=" bg-[#1e1d2f] rounded-[5px] p-2 telegram"><FaTelegramPlane /></div>
                        </div>
                    </div>
                    <div className="second border">
                        <ul className=' flex flex-col gap-4 p-2'>
                            <h1 className=''>Explore</h1>
                            <li>Blog</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Career</li>
                            <li>FAQs</li>
                            <li>Ask Doubts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;