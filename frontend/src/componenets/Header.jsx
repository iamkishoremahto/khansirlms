
import React from 'react';

import { MdKeyboardArrowDown } from "react-icons/md";
import Menu from './Menu'
import { IoMenuOutline } from "react-icons/io5";


function Header(props) {
    return (
        <>
            <div className="navbar min-h-11 flex justify-center items-center p-4">
                <div className="container flex items-center justify-between">
                    <div className="logo">
                        <img src="/images/kgs.png" className=' h-20' alt="" />
                    </div>
                    <div className="menu icon justify-center items-center md:hidden ">
                        <IoMenuOutline className=' text-[2.6em]' />
                    </div>
                    <div className="menu hidden lg:block">
                        <ul className=' flex lg:gap-4 2xl:gap-8'>
                            <div>
                                <Menu key = {1} data = {{url:"/Home",label:"Home"}} />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {2} data = {{url:"/Courses",label:"Courses"}} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {3} data = {{url:"/TestSeries",label:"Test Series"}} />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {4} data = {{url:"/CurrentAffairs",label:"Current Affairs"}} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {5} data = {{url:"/Practice",label:"Practice"}} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {6} data = {{url:"/Downloads",label:"Downloads"}} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {7} data = {{url:"/AnswerWriting",label:"Answer Writing"}} /><MdKeyboardArrowDown />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {8} data = {{url:"/OpenTest",label:"Open Test"}} />
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <Menu key = {9} data = {{url:"/sign-up",label:"Login/Register",extra_css:"text-white bg-[#3e4495] px-4 py-3 rounded-[5px] hover:text-white"}} />
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;