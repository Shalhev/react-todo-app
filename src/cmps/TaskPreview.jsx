export function TaskPreview({ task, onRemoveTask, onCompleteTask }) {
    return (
        <div className="task-preview flex auto-center" >
            <input type="checkbox" defaultChecked={task.isComplete} onChange={() => onCompleteTask(task)} />
            <p className={task.isComplete ? 'complete' : ''}>{task.txt}</p>
            < button onClick={() => onRemoveTask(task.id)}>X</button>
        </div>
    )
}