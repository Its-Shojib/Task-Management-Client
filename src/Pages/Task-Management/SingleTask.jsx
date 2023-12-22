import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SingleTask = ({ task, refetch }) => {
    let axiosPublic = useAxiosPublic();
    let { _id, taskName, taskStatus, date, email, desc } = task;

    let handleRemove = async (id) => {
        console.log(id);
        const res = await axiosPublic.delete(`/delete-task/${_id}`);
        if (res.data.deletedCount > 0) {
            toast("Task Removed", { icon: "💀" });
            refetch();
        }
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: { id: _id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    console.log(isDragging);

    return (
        <div ref={drag}
            className={`relative p-3 mt-5 shadow-sm cursor-grab bg-gray-300 ${isDragging ? 'opacity-25' : 'opacity-100'}`}>
            <p>{taskName}</p>
            <p>{date}</p>
            <p>{desc}</p>
            <p>{taskStatus}</p>
            <p>{email}</p>
            <button onClick={() => handleRemove(_id)} className="absolute bottom-3 right-2"><TiDeleteOutline className="text-2xl" /></button>
        </div>
    )
}
SingleTask.propTypes = {
    task: PropTypes.ReactNode,
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
    refetch: PropTypes.func
}
export default SingleTask;