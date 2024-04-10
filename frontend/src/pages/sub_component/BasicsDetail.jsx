
import React from 'react';
import InputField from '../../componenets/InputField';
import Dropdown from '../../componenets/Dropdown';

function BasicsDetail(props) {
    return (
       <>
        <form action="" className=' flex flex-col gap-2 m-5'>
            <InputField data={{ label: "Name", type: "text", placeholder: "Enter Your Name"}}/>
            <Dropdown data={{ label:"Select Gender", options:['Male','Female','Other']}}/>
            <Dropdown data={{ label:"Highest Education", options:['10th','12th','Diploma','Graduation','Post Graduation']}}/>
            <InputField data={{ label:'Email address', type:"email", placeholder:"Enter Your Email"}}/>
            <InputField data={{ label:'Phone Number', type:'text', placeholder:'Enter Your Number'}}/>
        </form>
       </>
    );
}

export default BasicsDetail;