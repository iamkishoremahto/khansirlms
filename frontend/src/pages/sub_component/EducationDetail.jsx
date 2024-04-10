
import React from 'react';
import InputField from '../../componenets/InputField';
import UpdateBtn from '../../componenets/UpdateBtn';

function EducationDetail(props) {
    return (
        <>
            <form action="" className=' flex flex-col gap-2 m-5'>
                <InputField data={{ label: 'Last Exam Name' }} />
                <InputField data={{ label: 'Last Exam Year' }} />
                <InputField data={{ label: 'Total Attempt' }} />
                <UpdateBtn/>
            </form>
        </>
    );
}

export default EducationDetail;