import React, {useState} from "react";
import './ToDoList.css';

const ToDoList = () => {
    const [tasks, setTasks] = useState(["Going to market", "Buying medications", "Hanging out with bros"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask () {
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        } else{
            alert("Enter your task...")
        }
    }

    function deleteTask (index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUpTask (index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }else{
            alert("Task is already in the highest priority")
        }
    }

    function moveDownTask (index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
            setTasks(updatedTasks);
        }else{
            alert("Task is already in the lowest priority");
        }
    }

    return(
        <div className="todo-container">
            <h1>To-Do-List</h1>
            <div className="input-btn-container">
            <input type="text" placeholder="Enter a task..." onChange={handleInputChange}/>
            <button className="add-btn" onClick={addTask}>Add</button>
            </div>
            <ol className="ol-div">
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span>{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveUpTask(index)}>Up</button>
                        <button className="move-btn" onClick={() => moveDownTask(index)}>Down</button>
                    </li>
                    
                    )}
            </ol>
        </div>
    );
}

export default ToDoList;