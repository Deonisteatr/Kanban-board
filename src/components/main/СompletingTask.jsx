import { useState } from "react";
import { useMatch, Link } from "react-router-dom";
import closeImage from "../../img/close.svg";
import TextArea from "./TextArea";
import AddButton from "./AddButton";

const CompletingTask = (props) => {
    const match = useMatch("tasks/:taskId");
    const { taskId } = match.params;
    const { tasks, setTasks } = props;
    const task = tasks.find(task => task.id === taskId);

    const [isFormVisible, setFormVisible] = useState(false);

    const changeVisible = () => {
        setFormVisible(!isFormVisible)
    };
    const [values, setValues] = useState('');

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({ ...values, [fieldName]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newDiscription = values.description;
     const updatedTasks = tasks.map(task =>
    task.id === taskId ? { ...task, description: newDiscription } : task
);
        setTasks(updatedTasks)
        setFormVisible(false)
    }
    return (
        <>
            <div className="container">
                {task ? (
                    <>
                        <h1>{task.title}</h1>

                        {isFormVisible &&
                            <form onSubmit={handleSubmit} className="add-form" data-status={task.status} data-id={task.id}>
                                <TextArea 
                                    onChange={handleChange}
                                    placeholder="Enter task description"
                                    type="text"
                                    name="description"
                                    className="container__textarea"
                                />
                                <AddButton 
                                    name="Submit"
                                    className="submit-btn"
                                    buttonType="submit"
                                />
                            </form>
                        }

                        {!isFormVisible &&
                            <div id="completingTask">
                                <div id="taskDescription">
                                    {task.description || "This task has no description"}
                                </div>
                                <AddButton 
                                    name="↻ Change description"
                                    className="add-btn"
                                    buttonType="button"
                                    onClick={changeVisible}
                                />
                            </div>
                        }
                    </>
                ) : (<p>Task with ID {taskId} not found</p>)}

                <Link className="close-btn" to="/" ><img src={closeImage} alt="close" /></Link>
            </div>
        </>
    )
}

export default CompletingTask
