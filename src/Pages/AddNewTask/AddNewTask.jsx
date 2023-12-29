import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const AddNewTask = () => {
    let axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    let { user } = useAuth();
    let goto = useNavigate();

    let onSubmit = async (data) => {
        let taskName = data?.taskName;
        let taskStatus = 'todo';
        let email = user?.email;
        let desc = data?.taskDesc;
        let priority = data?.taskPriority;
        let date = data?.taskDate;

        let newTask = { taskName, taskStatus, email, desc, priority, date };
        const taskRes = await axiosPublic.post('/create-task', newTask);
        if (taskRes.data.insertedId) {
            toast.success('Task Created Successfully', {icon: '😎'})
            goto('/task-dashboard/task-management');
            reset();
        }
    }
    return (
        <div className="flex pt-5">
            <div className="w-10/12 mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Task Name</span>
                            </label>
                            <input
                                type="text"
                                label="Name"
                                placeholder="Insert Task Name"
                                {...register('taskName', { required: true })}
                                className="w-full p-3" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Task Date</span>
                            </label>
                            <input {...register('taskDate', { required: true })}
                                type="date"
                                className=" w-full p-3" />
                        </div>
                    </div>
                    <div className="flex gap-10 my-5">
                        <div className="w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>

                            <select defaultValue="default" {...register('taskPriority', { required: true })}
                                className="select select-bordered w-full p-3">
                                <option disabled value="default">Select Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-10 my-5">
                        <div>
                            <label className="label">
                                <span className="label-text">Task Descriptions</span>
                            </label>
                            <textarea
                                {...register('taskDesc', { required: true })}
                                className="w-full px-2"
                                placeholder="Write Task Desc"
                                cols="40"
                                rows="10">
                            </textarea>
                        </div>
                    </div>

                    <button className="block bg-green-700 p-3 text-lg text-white rounded-lg" type="submit">
                        Save & Publish Now!
                    </button>
                </form>
            </div>
            <Toaster />
        </div>
    )
}
export default AddNewTask;