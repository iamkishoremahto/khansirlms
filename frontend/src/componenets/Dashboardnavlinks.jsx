
import React from 'react';
import { BiBroadcast } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Dashboardnavlinks() {
    return (
        <>
            <div className=" 2xl:flex justify-center mb-[50px] hidden ">
                <div className=" flex w-ful flex-col container">
                    <ul className="dashboard_navlinks flex flex-col w-72 gap-2 p-5 justify-start border-t-[3.5px] border-[#101b8d]">
                        <Link to="" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> Dashborad </Link>
                        <Link to="my-course/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">My Courses</Link>
                        <Link to="my-test-series/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> My Test Series</Link>
                        <Link to="live-classes/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer flex"><span>Live Classes</span> <span><BiBroadcast className=' text-2xl ml-2 text-[#101b8d]' /></span> </Link> 
                        <Link to="my-submission/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">My Submission</Link>
                        <Link to="asked-doubts/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> Asked Doubts</Link>
                        <Link to="orders/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> Orders</Link>
                        <Link to="my-profile/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> My Profile</Link>
                        <Link to="/all-courses/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> All Courses</Link>
                        <Link to="/ask-doubts/" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer"> Ask Doubts</Link>
                    </ul>
                    <div className="logout w-72 border text-center py-2 bg-[#ff221f] text-white rounded-[8px]">Log Out</div>
                </div>
            </div>
        </>
    );
}

export default Dashboardnavlinks;