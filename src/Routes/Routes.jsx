
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import Login from './../Pages/Login/Login';
import Register from "../Pages/Register/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TaskManagement from "../Pages/Task-Management/TaskManagement";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children:[
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
            path: '/task-management',
            element: <PrivateRoutes><TaskManagement></TaskManagement></PrivateRoutes>
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
  ]);
export default router;