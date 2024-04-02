
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from './Menu'
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

function Header(props) {

    const [isActive,setActive] = useState(false);

    const Menubtn = () => {
        setActive(!isActive)
    }

    return (
        <>
            <div className="navbar min-h-11 flex justify-center items-center p-4">
                <div className="container lg:flex hidden items-center justify-between">
                    <div className="logo">
                        <img src="/images/kgs.png" className=' h-20' alt="" />
                    </div>
                    <div className="menu hidden lg:block">
                        <ul className=' flex lg:gap-4 2xl:gap-8'>
                            <div>
                                <Menu key={1} data={{ url: "/", label: "Home" }} />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={2} data={{ url: "/courses", label: "Courses" }} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={3} data={{ url: "/test-series", label: "Test Series" }} />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={4} data={{ url: "/current-affairs", label: "Current Affairs" }} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={5} data={{ url: "/practice", label: "Practice" }} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={6} data={{ url: "/downloads", label: "Downloads" }} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={7} data={{ url: "/answer-writing", label: "Answer Writing" }} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key={8} data={{ url: "/open-test", label: "Open Test" }} />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {9} data = {{url:"/sign-up",label:"Login/Register",extra_css:"text-white bg-[#3e4495] px-4 py-3 rounded-[5px] hover:text-white"}} />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mobileNav lg:hidden w-full mt-4">
                    <div className=' flex w-full justify-between items-center'>
                        <div className="logo">
                            <img src="/images/kgs.png" className=' h-20' alt="" />
                        </div>
                        <div className="menu icon justify-center items-center lg:hidden relative" onClick={Menubtn}>
                            <HiMenu className={`text-[2.4em] ${isActive ? " hidden" : ""}`}  />
                        </div>
                        <div className="close absolute right-4 lg:hidden" onClick={Menubtn}>
                            <IoClose className={` text-4xl ${isActive ? "" : " hidden"}`}/>
                        </div>
                    </div>
                    <ul className={`flex flex-col gap-5 pt-[60px] ${isActive ? "" : " hidden"}`}>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={9} data={{ url: "/login", label: "Login/Register", extra_css: "text-white bg-[#3e4495] px-4 py-3 rounded-[5px] hover:text-white" }} />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={1} data={{ url: "/Home", label: "Home" }} />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={2} data={{ url: "/Courses", label: "Courses" }} /><MdKeyboardArrowDown />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={3} data={{ url: "/TestSeries", label: "Test Series" }} />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={4} data={{ url: "/CurrentAffairs", label: "Current Affairs" }} /><MdKeyboardArrowDown />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={5} data={{ url: "/Practice", label: "Practice" }} /><MdKeyboardArrowDown />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={6} data={{ url: "/Downloads", label: "Downloads" }} /><MdKeyboardArrowDown />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={7} data={{ url: "/AnswerWriting", label: "Answer Writing" }} /><MdKeyboardArrowDown />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={8} data={{ url: "/OpenTest", label: "Open Test" }} />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={10} data={{ url: "/AskDoubts", label: "Ask Doubts" }} />
                        </div>
                        <div className='flex justify-left items-center gap-1'>
                            <Menu key={11} data={{ url: "/Gallery", label: "Gallery" }} />
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;