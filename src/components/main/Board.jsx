import uniqid from "uniqid";
import { LIST_TYPES, LIST_COPY } from "../../config";
import List from "./List";
import { useCallback } from 'react';

const Board = (props) => {
    const { tasks, setTasks } = props;

  const addNewTask = useCallback((title, description) => {
        const task = {
            id: uniqid(),
            title,
            status: "backlog",
        }
        setTasks([...tasks, task]);
    }, [setTasks, tasks]);

    return (
        <div className="board__container">
            {
                Object.values(LIST_TYPES).map((type) => {
                    const listTasks = tasks.filter(task => task.status === type)
                     return (
                        <List 
                            key={type}
                            type={type}
                            title={LIST_COPY[type]}
                            allTasks={tasks}
                            listTasks={listTasks}
                            addNewTask={addNewTask}
                            setTasks={setTasks}

                        />
                     )
                })
            }
        </div>
    )
}

export default Board
