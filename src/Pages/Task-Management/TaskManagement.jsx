import { DndProvider } from "react-dnd";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import ListTasks from "./ListTasks";
import { HTML5Backend } from "react-dnd-html5-backend";


const TaskManagement = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Toaster />
            <Helmet>
                <title>Task Master | Dashboard</title>
            </Helmet>
            <div className="bg-slate-200">
                <ListTasks ></ListTasks>
            </div>
        </DndProvider>
    )
}
export default TaskManagement;