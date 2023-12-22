import PropTypes from 'prop-types';
import Header from './Header';
import SingleTask from './SingleTask';
import { useDrop } from 'react-dnd';
import toast from 'react-hot-toast';

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))


    let text = 'Todo';
    let bg = 'bg-slate-500';
    let taskToMap = todos;

    if (status === 'inprogress') {
        text = 'In Progress';
        bg = 'bg-purple-500';
        taskToMap = inProgress;
    }
    if (status === 'closed') {
        text = 'In Progress';
        bg = 'bg-green-500';
        taskToMap = closed;
    }

    let addItemToSection = (id) => {
        // console.log('Dropped : ', id, status);
        setTasks(prev => {
            const mTask = prev.map(t => {
                if (t.id === id) {
                    return { ...t, status: status }
                }
                return t;
            })

            localStorage.setItem('tasks', JSON.stringify(mTask));
            toast('Task status Changed', {icon: "🤗"});
            return mTask;
        });
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
                    tasks={tasks}
                    setTasks={setTasks}
                />)
            }
        </div>
    )
}
Section.propTypes = {
    status: PropTypes.string,
    todos: PropTypes.array,
    tasks: PropTypes.array,
    setTasks: PropTypes.func,
    inProgress: PropTypes.array,
    closed: PropTypes.array
}
export default Section;