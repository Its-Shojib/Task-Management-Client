import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";
import { Toaster } from 'react-hot-toast';

const TaskManagement = () => {
    let [tasks, setTasks] = useState([]);
    console.log("tasks:", tasks);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, [])
    return (
        <div>
            <Toaster />
            <Helmet>
                <title>Task Master | Dashboard</title>
            </Helmet>
            <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-32 gap-14">
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
            </div>

        </div>
    )
}
export default TaskManagement;