
import React from 'react';
import InputField from '../../componenets/InputField';
import Dropdown from '../../componenets/Dropdown';
import UpdateBtn from '../../componenets/UpdateBtn';

function Address(props) {
    return (
        <>
        <form action="" className=' p-5 flex flex-col gap-2'>
            <InputField data={{ label:"Current Address"}}/>
            <div className=' flex gap-6'>
                <Dropdown data={{ label:'Current Address', options:['Select State', 'Karnataka', 'Jarkhand', 'AndraPradesh', 'Telengana', 'Kerala', 'MadhyaPradesh']}}/>
                <Dropdown data={{ label:'Current City', options:['Select City', '']}}/>
            </div>
            <InputField data={{ label:'Current Pin Code'}}/>
            <div className=' flex gap-2 p-2'>
                <input type="checkbox" />
                <div className=' text-[1.2em]'>Same as Current Address</div>
            </div>
            <InputField data={{ label:'Present Address'}}/>
            <div className=' flex gap-6'>
                <Dropdown data={{ label:'Current Address', options:['Select State', 'Karnataka', 'Jarkhand', 'AndraPradesh', 'Telengana', 'Kerala', 'MadhyaPradesh']}}/>
                <Dropdown data={{ label:'Current City', options:['Select City', '']}}/>
            </div>
            <InputField data={{ label:'Present Pin Code'}}/>
           <UpdateBtn/>
        </form>
        </>
    );
}

export default Address;