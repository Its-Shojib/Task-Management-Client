import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Section from "./Section";
import useLoadData from "../../Hooks/useLoadData";


const ListTasks = () => {
    let [TaskCollection, refetch] = useLoadData();


    let [todos, setTodos] = useState([]);
    let [ongoing, setOngoing] = useState([]);
    let [completed, setCompleted] = useState([]);


    useEffect(() => {
        const fTodos = TaskCollection?.filter((task) => task.taskStatus === 'todo');
        const fOngoing = TaskCollection?.filter((task) => task.taskStatus === 'ongoing');
        const fCompleted = TaskCollection?.filter((task) => task.taskStatus === 'completed');
    
        // Check if the filtered tasks are different before updating state
        if (!arraysAreEqual(fTodos, todos)) {
            setTodos(fTodos);
        }
    
        if (!arraysAreEqual(fOngoing, ongoing)) {
            setOngoing(fOngoing);
        }
    
        if (!arraysAreEqual(fCompleted, completed)) {
            setCompleted(fCompleted);
        }
    }, [TaskCollection, todos, ongoing, completed]);
    
    // Helper function to compare arrays
    function arraysAreEqual(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }
    


    let statuses = ['todo', 'ongoing', 'completed'];

    return (
        <div className="w-full md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-screen pt-10">
            {
                statuses?.map((status, index) => (
                    <Section
                        key={index}
                        status={status}
                        todos={todos}
                        onGoing={ongoing}
                        completed={completed}
                        refetch={refetch}
                    />
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