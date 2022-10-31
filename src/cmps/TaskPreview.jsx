export function TaskPreview({ task, onRemoveTask, onCompleteTask }) {
    return (
        <p className="task-preview">
            <input type="checkbox" defaultChecked={task.isComplete} onChange={() => task.isComplete = !task.isComplete} />
            {task.txt}
            < button onClick={() => onRemoveTask(task.id)}>X</button>
        </p>
    )
}