import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto z-50'><Navbar></Navbar></div>
            <div className='max-w-screen-2xl mx-auto pt-20'><Outlet></Outlet></div>
            <div className='max-w-screen-2xl mx-auto mt-20'><Footer></Footer></div>
        </div>

    )
}
export default MainLayout;