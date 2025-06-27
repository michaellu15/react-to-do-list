import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Do the Dishes", "Mop the Floor", "Water the Plants"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() != "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }
    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const t = [...tasks];
            let temp = t[index - 1];
            t[index - 1] = t[index];
            t[index] = temp;
            setTasks(t);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const t = [...tasks];
            let temp = t[index + 1];
            t[index + 1] = t[index];
            t[index] = temp;
            setTasks(t);
        }
    }
    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task:"
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <div className="numbers">
                            {index + 1}
                        </div>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    );

}
export default ToDoList