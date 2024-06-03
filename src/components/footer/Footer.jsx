const Footer = (props) => {
    const {activeTasks, finishedTasks} = props
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer__counter">Active tasks: {activeTasks}</div>
                <div className="footer__counter">Finished tasks: {finishedTasks}</div>
            </div>
            <div className="footer-content">Kanban board by &#8249;NAME&#8250;, &#8249;YEAR&#8250;</div>
            
        </footer>
    )
}

export default Footer