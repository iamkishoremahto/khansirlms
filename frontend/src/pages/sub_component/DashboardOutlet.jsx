
import React from 'react';

function DashboardOutlet(props) {
    return (
        <div className=' flex justify-center min-h-[400px]'>
            <div className=' grid min-h-[400px] w-[1100px]'>
                <div className=" min-h-[300px] rounded-[35px] bg-gradient-to-tr from-[#0d1773] to-[#090451]  bg-no-repeat bg-contain">
                    <img src="/images/kgs.png" className=' h-20' alt="" />               
                </div>
            </div>
        </div>
    );
}

export default DashboardOutlet;

