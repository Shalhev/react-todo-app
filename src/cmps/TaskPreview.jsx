export function TaskPreview({ task, onRemoveTask, onCompleteTask }) {
    return (
        <div className="task-preview flex auto-center" >
            <div className="round">
                <input type="checkbox" id="checkbox" defaultChecked={task.isComplete} onChange={() => onCompleteTask(task)} />
            </div>
            <p className={task.isComplete ? 'complete' : ''}>{task.txt}</p>
            < button onClick={() => onRemoveTask(task.id)}>X</button>
        </div>
    )
}