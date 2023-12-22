import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


const TaskManagement = () => {
    let [tasks, setTasks] = useState([]);
    console.log("tasks:", tasks);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, [])
    return (
        <DndProvider backend={HTML5Backend}>
            <Toaster />
            <Helmet>
                <title>Task Master | Dashboard</title>
            </Helmet>
            <div className="bg-slate-100 w-screen h-screen flex flex-col items-center pt-32 gap-14">
                <CreateTask tasks={tasks} setTasks={setTasks}></CreateTask>
                <ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
            </div>
        </DndProvider>
    )
}
export default TaskManagement;