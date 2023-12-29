import toast from "react-hot-toast";
import { TiDeleteOutline } from "react-icons/ti";
import PropTypes from 'prop-types';
import { useDrag } from "react-dnd";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SingleTask = ({ task, refetch }) => {
    let axiosSecure = useAxiosSecure();
    let goto = useNavigate();
    let { _id, taskName, date, desc, priority } = task;

    let handleRemove = async (id) => {
        const res = await axiosSecure.delete(`/delete-task/${id}`);
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

    return (
        <div ref={drag}
            className={`relative p-3 mt-5 shadow-sm cursor-grab bg-gray-300 ${isDragging ? 'opacity-25' : 'opacity-100'}`}>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body">
                    <h2 className="card-title">{taskName}</h2>
                    <p>Priority: {priority}</p>
                    <p>Date: {date}</p>
                    <p>Desc: {desc}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=> goto(`/task-dashboard/update-task/${_id}`)} className="btn btn-primary">Update</button>
                        <button onClick={() => handleRemove(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>

            <button className="absolute bottom-3 right-2"><TiDeleteOutline className="text-2xl" /></button>
        </div>
    )
}
SingleTask.propTypes = {
    task: PropTypes.object,
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
    refetch: PropTypes.func
}
export default SingleTask;