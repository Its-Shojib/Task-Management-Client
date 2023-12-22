import PropTypes from 'prop-types';
import Header from './Header';
import SingleTask from './SingleTask';
import { useDrop } from 'react-dnd';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Section = ({ status, tasks, setTasks, todos, onGoing, completed, refetch }) => {

    let axiosPublic = useAxiosPublic();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))


    let text = 'Todo Task';
    let bg = 'bg-slate-500';
    let taskToMap = todos;

    if (status === 'ongoing') {
        text = 'Ongoing Task';
        bg = 'bg-purple-500';
        taskToMap = onGoing;
    }
    if (status === 'completed') {
        text = 'Completed Task';
        bg = 'bg-green-500';
        taskToMap = completed;
    }

    let addItemToSection = async (id) => {
        let newStatus = {status}
        let stateChangeRes = await axiosPublic.put(`/change-state/${id}`, newStatus)
        console.log(stateChangeRes.data);
        refetch()
        toast('Task status Changed', { icon: "🤗" });
    }

    return (
        <div
            ref={drop}
            className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ""}`}>
            <Header
                text={text}
                bg={bg}
                count={taskToMap?.length} />
            {
                taskToMap?.length > 0 && taskToMap?.map((task) => <SingleTask
                    key={task?.id}
                    task={task}
                    refetch={refetch}
                />)
            }
        </div>
    )
}
Section.propTypes = {
    status: PropTypes.string,
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
    refetch: PropTypes.func,
    todos: PropTypes.array,
    onGoing: PropTypes.array,
    completed: PropTypes.array
}
export default Section;