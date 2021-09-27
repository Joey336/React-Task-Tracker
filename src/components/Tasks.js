import Task from './Task'

//takes in tasks state from App.js as a prop
const Tasks = ({tasks}) => {
   

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </>
    )
}

export default Tasks
