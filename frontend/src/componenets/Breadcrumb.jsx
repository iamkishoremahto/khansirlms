/* eslint-disable react/prop-types */
import { NavLink, useLocation } from 'react-router-dom'

export default function Breadcrumb(props) {

  let location = useLocation().pathname.split('/');
  let current_link = ''

  return (
    <>
      <div className="breadcrumWrapper min-h-[150px] min-w-screen bg-gray-100 grid place-items-center ">
        <div className="container grid gap-5 ">
          <div className="crumbs flex">
            {

              location.map((link, index) => {

                current_link += link === '' ? '/' : link

                return <div key={index} className="breadcrumbs px-1 ">

                  <NavLink className={({ isActive }) => (
                    `${isActive ? 'font-bold text-black' : ' text-gray-500'} capitalize`
                  )} to={current_link}>{link === '' ? "" : <span className=' font-normal text-gray-500'> / </span>}{link === '' ? "home" : link.replace('-', ' ')}</NavLink>
                </div>
              })
            }
          </div>
          <div className="breadcrumbTitile">
            <h1 className='text-center text-4xl font-bold text-[#021f35]'>{props.data.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
