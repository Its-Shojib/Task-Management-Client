import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Section from "./Section";
import useLoadData from "../../Hooks/useLoadData";

const ListTasks = ({ tasks, setTasks }) => {
    let [TaskCollection, refetch] = useLoadData();

    let [todos, setTodos] = useState([]);
    let [ongoing, setOngoing] = useState([]);
    let [completed, setCompleted] = useState([]);


    console.log(TaskCollection);

    useEffect(() => {
        const fTodos = TaskCollection?.filter((task) => task.taskStatus === 'todo');
        const fOngoing = TaskCollection?.filter((task) => task.taskStatus === 'ongoing');
        const fCompleted = TaskCollection?.filter((task) => task.taskStatus === 'completed');

        setTodos(fTodos);
        setOngoing(fOngoing);
        setCompleted(fCompleted);

    }, [TaskCollection]);

    let statuses = ['todo', 'ongoing', 'completed'];

    return (
        <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-screen pt-10">
            {
                statuses?.map((status, index) => (
                    <Section
                        key={index}
                        status={status}
                        tasks={tasks}
                        setTasks={setTasks}
                        todos={todos}
                        onGoing={ongoing}
                        completed={completed}
                        refetch={refetch} />
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