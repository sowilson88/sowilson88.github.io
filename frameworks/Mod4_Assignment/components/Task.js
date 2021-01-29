import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.complete ? 'complete' : ''}`} 
        onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}<FaTimes style={{ color: '#6F3637' }}
            onClick={() => onDelete(task.id)}/></h3>

        </div>
    )
}

export default Task
