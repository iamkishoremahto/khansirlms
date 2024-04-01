import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import {Outlet} from 'react-router-dom'


function Layout(){
    return(
        <>
            <div className="main">
                <div className="header">
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