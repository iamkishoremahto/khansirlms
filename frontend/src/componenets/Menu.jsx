
import { Link, NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <>
            <nav className='menu'>
                <NavLink to={props.data.url} className={({ isActive, isPending }) => (
                    `${isActive ? "text-[#3e4495]" : "text-black"} hover:text-[#3e4495] lg:text-[0.8em] xl:text-[1em] font-medium ${props.data.extra_css?props.data.extra_css:""}`
                )}>
                    {props.data.label}
                </NavLink>
            </nav>
        </>
    );
}

export default Menu