
import React from 'react';
import { BiBroadcast } from "react-icons/bi";

function Dashboardnavlinks() {
    return (
        <>
            <div className=" flex justify-center mb-[50px]">
                <div className=" flex w-ful flex-col container">
                    <ul className="dashboard_navlinks flex flex-col w-72 gap-2 p-5 justify-start border-t-[3.5px] border-[#101b8d]">
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">Dashborad</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">My Courses</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">My Test Series</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer flex"><span>Live Classes</span><BiBroadcast className=" ml-2 text-2xl text-[#101b8d]" /></li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">My Submission</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">Asked Doubts</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">Orders</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">My Profile</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">All Courses</li>
                        <li to="#" className=" hover:bg-[#101b8d] hover:text-white pl-3 py-3 transition-all ease-in-out duration-500 cursor-pointer">Ask Doubts</li>
                    </ul>
                    <div className="logout w-72 border text-center py-2 bg-[#ff221f] text-white rounded-[8px]">Log Out</div>
                </div>
            </div>
        </>
    );
}

export default Dashboardnavlinks;