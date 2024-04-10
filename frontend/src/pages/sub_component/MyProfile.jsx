
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function MyProfile(props) {
    return (
        <>
            <div className=' 2xl:p-5 min-h-full 2xl:w-[1000px] '>
                <div className=' flex gap-10 px-5 py-3 bg-[#f8f9f8]'>
                    <Link to="basic-detail/" className="relative before:content['], before:w-0 hover:before:w-full before:h-[3px] before:absolute before:bottom-0 before:bg-[#111e92] pb-3 cursor-pointer basics text-[1.2em]  font-medium  before:transition-all before:duration-500">Basics Details</Link>
                    <Link to="address/" className="relative before:content['], before:w-0 hover:before:w-full before:h-[3px] before:absolute before:bottom-0 before:bg-[#111e92] pb-3 cursor-pointer basics text-[1.2em]  font-medium  before:transition-all before:duration-500">Address</Link>
                    <Link to="educational-detail/" className="relative before:content['], before:w-0 hover:before:w-full before:h-[3px] before:absolute before:bottom-0 before:bg-[#111e92] pb-3 cursor-pointer basics text-[1.2em]  font-medium  before:transition-all before:duration-500">Education Details</Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default MyProfile;