import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import {Outlet} from 'react-router-dom'
import { useAuthProvider } from "../hooks/useAuthProvider.js";
import { useEffect } from 'react';

function Layout(){
    const { setUser } = useAuthProvider(state => ({ user: state.user, setUser: state.setUser }));

    useEffect(() =>{
        const accessToken = localStorage.getItem('access_token');
        if(accessToken){
            setUser();
        }
        
    },[]);

   
    return(
        <>
            <div className="main">
                <div className="header sticky top-0 bg-white">
                   <Header/>
                </div>
                <div className="outlet_section">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer/>
                </div>
                
            </div>
        </>
    );
}

export default Layout;