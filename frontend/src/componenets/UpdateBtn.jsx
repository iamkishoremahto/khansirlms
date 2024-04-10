
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

function UpdateBtn(props) {
    return (
        <>
            <div className="update my-4 mx-2">
                <button className=' flex justify-center items-center gap-2 border px-6 py-2 bg-[#3e4192] text-white rounded-[8px] hover:bg-white hover:text-[#3e4192] hover:border-[#3e4192]'> <IoIosArrowForward className='  text-xl font-medium' /> <span className=' font-medium'>Update</span></button>
            </div>
        </>
    );
}

export default UpdateBtn;