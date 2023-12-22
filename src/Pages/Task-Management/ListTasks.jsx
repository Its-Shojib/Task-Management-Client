import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
    let [todos, setTodos] = useState([]);
    let [inProgress, setInProgress] = useState([]);
    let [closed, setClosed] = useState([]);

    console.log(tasks);

    useEffect(() => {
        const fTodos = tasks?.filter((task) => task.status === 'todo');
        const fInProgress = tasks?.filter((task) => task.status === 'inprogress');
        const fClosed = tasks?.filter((task) => task.status === 'closed');

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks]);

    let statuses = ['todo', 'inprogress', 'closed'];
    return (
        <div className="flex gap-20">
            {
                statuses?.map((status, index) => (
                    <Section
                        key={index}
                        status={status}
                        tasks={tasks}
                        setTasks={setTasks}
                        todos={todos}
                        inProgress={inProgress}
                        closed={closed} />
                ))
            }
        </div>
    )
}
ListTasks.propTypes = {
    tasks: PropTypes.array,
    setTasks: PropTypes.func
}
export default ListTasks;