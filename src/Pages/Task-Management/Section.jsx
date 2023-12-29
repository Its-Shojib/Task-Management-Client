import PropTypes from 'prop-types';
import Header from './Header';
import SingleTask from './SingleTask';
import { useDrop } from 'react-dnd';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Section = ({ status, todos, onGoing, completed, refetch }) => {
    let axiosSecure = useAxiosSecure();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))


    let text = 'Todo Task';
    let bg = 'bg-red-500';
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
        let newStatus = { status }
        let stateChangeRes = await axiosSecure.put(`/change-state/${id}`, newStatus)
        if (stateChangeRes.data.modifiedCount > 0) {
            refetch()
            toast(`Task moved to ${status}`, { icon: "🤗" });
        }

    }

    return (
        <div
            ref={drop}
            className={` h-[500px] overflow-y-scroll rounded-md p-2 ${isOver ? 'bg-slate-200' : ""}`}>
            <Header
                text={text}
                bg={bg}
                count={taskToMap?.length} />
            {
                taskToMap?.length > 0 && taskToMap?.map((task) => <SingleTask
                    key={task?._id}
                    task={task}
                    refetch={refetch}
                />)
            }
        </div>
    )
}
Section.propTypes = {
    status: PropTypes.string,
    refetch: PropTypes.func,
    todos: PropTypes.array,
    onGoing: PropTypes.array,
    completed: PropTypes.array
}
export default Section;