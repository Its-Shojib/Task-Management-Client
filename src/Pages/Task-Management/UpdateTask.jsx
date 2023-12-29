import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const UpdateTask = () => {
    let goto = useNavigate();
    let axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    let myData = useLoaderData();
    let { taskName, priority,_id, date, desc } = myData;

    let onSubmit = async (data) => {
        let taskName = data?.taskName;
        let desc = data?.taskDesc;
        let priority = data?.taskPriority;
        let date = data?.taskDate;

        let updatedTask = { taskName, desc, priority, date };
        console.log(updatedTask);
        const updateTaskRes = await axiosSecure.put(`/update-single-task/${_id}`, updatedTask);
        if (updateTaskRes.data.modifiedCount) {
            reset();
            goto('/task-dashboard/task-management')
            toast.success('Task Updated Successfully', {icon: '😎'})
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
                                defaultValue={taskName}
                                label="Name"
                                {...register('taskName', { required: true })}
                                className="w-full p-3" />
                        </div>
                        <div className="flex-1">
                            <label className="label">
                                <span className="label-text">Task Date</span>
                            </label>
                            <input
                                {...register('taskDate', { required: true })}
                                type="date"
                                defaultValue={date}
                                className=" w-full p-3" />
                        </div>
                    </div>
                    <div className="flex gap-10 my-5">
                        <div className="w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>

                            <select defaultValue={priority} {...register('taskPriority', { required: true })}
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
                                defaultValue={desc}
                                {...register('taskDesc', { required: true })}
                                className="w-full"
                                cols="40"
                                rows="10">
                            </textarea>
                        </div>
                    </div>

                    <button className="block bg-green-700 p-3 text-lg text-white rounded-lg" type="submit">
                        Update Now!
                    </button>
                </form>
            </div>
            <Toaster />
        </div>
    )
}
export default UpdateTask;