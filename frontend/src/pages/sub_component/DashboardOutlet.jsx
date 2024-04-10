
import React from 'react';
import { Link } from 'react-router-dom';

function DashboardOutlet(props) {
    return (
        <div className=' flex justify-center min-h-[400px]'>
            <div className=' grid min-h-[400px] w-[1100px]'>
                <div className=" min-h-[300px] p-5 rounded-[35px] bg-gradient-to-tr from-[#111e92] to-[#090451]  bg-no-repeat bg-contain">
                    <div>
                        <img src="/images/kgs.png" className=' h-[52px]' alt="" />
                    </div>
                    <div className=' grid grid-cols-2 mx-20'>
                        <div className=' flex justify-center flex-col gap-6'>
                            <div className='text-white text-xl'>KHAN GLOBAL STUDIES</div>
                            <div className='text-white text-3xl'>Try Our New Dashboard</div>
                            <div className=' cursor-pointer bg-white text-[#101b8d] hover:text-sky-600 hover:font-medium hover:tracking-[1px] transition-all ease-linear duration-300 text-center w-32 py-2 rounded-[35px]'>Try Now</div>
                        </div>
                        <div>
                            <img src="/images/Online learning-bro.svg" className=' h-96' alt="" />
                        </div>
                    </div>
                </div>
                <div className=' m-2'>
                    <ul className=' border p-6 flex gap-4'>
                        <Link to="#" className=' border px-2 py-1 rounded-[5px] text-[0.9em] hover:border-[#101b8d] hover:text-[#101b8d] transition-all ease-in-out duration-500'>My Courses</Link>
                        <Link to="#" className=' border px-2 py-1 rounded-[5px] text-[0.9em] hover:border-[#101b8d] hover:text-[#101b8d] transition-all ease-in-out duration-500'>Live Courses</Link>
                        <Link to="#" className=' border px-2 py-1 rounded-[5px] text-[0.9em] hover:border-[#101b8d] hover:text-[#101b8d] transition-all ease-in-out duration-500'>All Test Series</Link>
                        <Link to="#" className=' border px-2 py-1 rounded-[5px] text-[0.9em] hover:border-[#101b8d] hover:text-[#101b8d] transition-all ease-in-out duration-500'># Ask Doubts Response</Link>
                        <Link to="#" className=' border px-2 py-1 rounded-[5px] text-[0.9em] hover:border-[#101b8d] hover:text-[#101b8d] transition-all ease-in-out duration-500'># Orders</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DashboardOutlet;

