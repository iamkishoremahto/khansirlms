
import React from 'react';

function Dropdown(props) {
    return (
        <>
            <div className=' flex flex-col w-full gap-2'>
                <label htmlFor="" className="text-xl">{props.data.label}</label>
                <select name="" id="" className="text-lg py-3 px-3 bg-gray-100 rounded-sm focus:outline-none transition duration-700  focus:border-blue-700 focus:border focus:bg-white"> 
                    {
                        props.data.options.map((value,index) => (
                        <option key ={index} value = {value.toLowerCase()}>{value}</option>
                    ))
                    }
                </select>
            </div>
        </>
    );
}

export default Dropdown;