import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5500/api/tasks")

            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error("Error fetching tasks:", error);
            });
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
