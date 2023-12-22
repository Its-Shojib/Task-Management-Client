import toast from 'react-hot-toast';
import useAxiosPublic from './../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import useLoadData from '../../Hooks/useLoadData';

const CreateTask = () => {
    const axiosPublic = useAxiosPublic();
    let { user } = useAuth();
    let [, refetch] = useLoadData();

    let handleSubmit = async (e) => {
        e.preventDefault();
        let form = e.target;
        let taskName = form.taskName.value;
        let taskStatus = 'todo';
        let email = user?.email;
        let desc = '';
        let priority = 'high';
        let date = '22-12-2023'

        if (taskName.length < 3) return toast.error('Task must be greater than 2 characters');

        let newTask = { taskName, taskStatus, email, desc, priority, date };
        const taskRes = await axiosPublic.post('/create-task', newTask);
        // console.log(taskRes.data)
        if (taskRes.data.insertedId) {
            console.log(taskRes.data);
            toast.success('Task Created')
            refetch();
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="taskName"
                    className='border-2 border-slate-300 bg-slate-100 rounded-md mr-3 h-12 w-64 px-1'
                    placeholder='Task Name' />
                <button className='bg-green-800 text-white rounded-md px-4 py-3' type='submit'>Create</button>
            </form>
        </div>
    )
}
export default CreateTask;