import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";

const SingleTask = ({ task, tasks, setTasks }) => {
    console.log(tasks);

    let handleRemove = (id) => {
        let fTasks = tasks.filter((t) => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(fTasks))
        setTasks(fTasks);

        toast("Task Removed");
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging);

    return (
        <div ref={drag}
        className={`relative p-3 mt-5 shadow-sm cursor-grab bg-gray-300 ${isDragging ? 'opacity-25':'opacity-100'}`}>
            <p>{task.name}</p>
            <button onClick={() => handleRemove(task.id)} className="absolute bottom-3 right-2"><TiDeleteOutline className="text-2xl" /></button>
        </div>
    )
}
SingleTask.propTypes = {
    task: PropTypes.ReactNode,
    tasks: PropTypes.array,
    setTasks: PropTypes.func
}
export default SingleTask;