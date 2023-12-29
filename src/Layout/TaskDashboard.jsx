import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaPhone, FaSignOutAlt, FaTasks } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { TbListDetails } from "react-icons/tb";
import { MdAddTask } from "react-icons/md";


const TaskDashboard = () => {
    let { user, Logout } = useAuth();
    let goto = useNavigate();

    return (
        <div className="max-w-screen-2xl mx-auto flex">
            <div className="w-2/6 md:w-64 min-h-screen bg-[#172935] text-white">
                <div className='text-center my-5'>
                    <img className="w-20 mx-auto" src={user?.photoURL} alt="" />
                    <h1 className='text-3xl font-bold'>Task Master</h1>
                </div>
                <div>
                    <ul className='flex flex-col mt-10 px-6 space-y-3'>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='task-management' ><FaTasks></FaTasks> Task Management</NavLink>
                        </li>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='add-task' ><MdAddTask /> Add New Task</NavLink>
                        </li>
                    </ul>
                </div>

                <hr className='w-full my-5' />

                <div>
                    <ul className='flex flex-col px-6 space-y-3'>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/' >
                                <FaHome></FaHome>Home</NavLink>
                        </li>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/contact-us' >
                                <FaPhone></FaPhone>Contact-Us</NavLink>
                        </li>
                        <li >
                            <NavLink className='flex items-center font-bold gap-2'
                                to='/about-us' >
                                <TbListDetails />About-Us</NavLink>
                        </li>
                        <li >
                            <NavLink onClick={() => Logout().then(goto('/')).catch( ()=> {})} className='flex items-center font-bold gap-2'>
                                <FaSignOutAlt />Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex-1 bg-gray-200">
                <Outlet></Outlet>
            </div>

        </div>

    )
}
export default TaskDashboard;