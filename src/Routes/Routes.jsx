
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import Login from './../Pages/Login/Login';
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRoutes from "./PrivateRoutes";
import TaskDashboard from "../Layout/TaskDashboard";
import TaskManagement from "../Pages/Task-Management/TaskManagement";
import AddNewTask from "../Pages/Add New Task/AddNewTask";
import UpdateTask from "../Pages/Task-Management/UpdateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },

        ],
    },
    {
        path: '/task-dashboard',
        element: <PrivateRoutes><TaskDashboard></TaskDashboard></PrivateRoutes>,
        children: [
            {
                path: 'task-management',
                element: <PrivateRoutes><TaskManagement></TaskManagement></PrivateRoutes>
            },
            {
                path: 'add-task',
                element: <PrivateRoutes><AddNewTask></AddNewTask></PrivateRoutes>
            },
            {
                path: 'task-management/update-task/:id',
                element: <PrivateRoutes><UpdateTask></UpdateTask></PrivateRoutes>,
                loader: (params)=> fetch(`https://task-management-system-server-jade.vercel.app/update-task/${params.id}`)
            },
        ]
    },
]);
export default router;