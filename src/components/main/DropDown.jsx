/* eslint-disable array-callback-return */
import { LIST_TYPES } from "../../config";
import uniqid from "uniqid";

const DropDown = (props) => {
    const { blockType, allTasks, setTasks, setFormVisible, isFormVisible } = props;

    const handleChange = (e) => {
        const newStatus = e.target.getAttribute("data-status")
        const updatedTasks = allTasks.map(task => {
            if (task.id === e.target.id) {
                return { ...task, status: newStatus }
            }
            return task
        })
        setTasks(updatedTasks)
        setFormVisible(!isFormVisible)
    }
    const changeVisible = () => {
        setFormVisible(!isFormVisible)
    }

    return (
        <div className="dropdown__wrapper">
            <div className="header__dropdown" onClick={changeVisible}></div>
            {Object.values(LIST_TYPES).map((list, index) => {
                if (list === blockType) {
                    return (
                        <div key={uniqid()} className="dropdown__container">
                            {
                                allTasks.filter(obj => { return obj.status === Object.values(LIST_TYPES)[index - 1] }).map((taskTitle) => {
                                    return (
                                        <div key={uniqid()} data-status={list} id={taskTitle.id} onClick={handleChange}>{taskTitle.title}</div>
                                    )
                                })
                            }
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default DropDown;