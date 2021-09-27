import Task from './Task'

//takes in tasks state from App.js as a prop
const Tasks = ({tasks, onDelete, onToggle}) => {
   

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
