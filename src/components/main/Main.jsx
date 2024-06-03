import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import CompletingTask from "./СompletingTask"


const Main = (props) => {
    const { setTasks } = props;

    return (
        <main className="main">
            <Routes>
               <Route path="/" exact element={
                    <Board 
                        {...props}
                    />
               } />
               <Route path="/tasks/:taskId" element={
                <CompletingTask
                    {...props}
                    setTasks={setTasks}
                />
               } />
            </Routes>
        </main>
    )
}

export default Main