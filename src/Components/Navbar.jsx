import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../AuthProvider/AuthProvider';


const Navbar = () => {
    let { user, Logout } = useContext(AuthContext);

    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
        <li><NavLink to='/about-us'>About US</NavLink></li>
        {
            user && <li><NavLink to='/task-dashboard/task-management'>Task Dashboard</NavLink></li>
        }
    </>
    return (
        <div>
            <div className="navbar fixed top-0 bg-[#0a081f] z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Link><img className="w-20 md:w-32 h-16" src="/Task.png" alt="" /></Link>
                        <h2 className="text-white text-lg md:text-3xl font-bold">Task Master</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-white md:pr-5">
                    {
                        user && <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-40 text-right">
                                    <li>{user.displayName}</li>
                                </ul>
                            </div>
                        </>
                    }
                    {
                        user ? <button onClick={() => Logout().then().catch( ()=> {})} className="bg-red-600 px-2 md:px-4 py-2 rounded-md font-semibold">Log Out</button> : <button className=" bg-green-600 px-2 md:px-4 py-2 rounded-md font-semibold"><NavLink to='/login'>Login</NavLink></button>
                    }

                </div>
            </div>
        </div>
    )
}
export default Navbar;