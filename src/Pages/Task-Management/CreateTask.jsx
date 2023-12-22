import PropTypes from 'prop-types';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

const CreateTask = ({ tasks, setTasks }) => {
    let [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo",
    });
    console.log(task);
    let handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length < 3) return toast.error('Task must be greater than 2 characters')
        setTasks((prev) => {
            const list = [...prev, task];
            localStorage.setItem('tasks', JSON.stringify(list));

            return list;
        });

        toast.success('Task Created')
        setTask({
            id: "",
            name: "",
            status: "todo",
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    className='border-2 border-slate-300 bg-slate-100 rounded-md mr-3 h-12 w-64 px-1'
                    onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
                    value={task.name}
                    placeholder='Task Name' />
                <button className='bg-green-800 text-white rounded-md px-4 py-3' type='submit'>Create</button>
            </form>
        </div>
    )
}
CreateTask.propTypes = {
    tasks: PropTypes.array,
    setTasks: PropTypes.func
}
export default CreateTask;