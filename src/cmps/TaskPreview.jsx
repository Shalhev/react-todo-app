export function TaskPreview({ task, onRemoveTask, onCompleteTask }) {
    return (
        <div className="task-preview" >
            <div className="round">
                <input type="checkbox" id="checkbox" defaultChecked={task.isComplete} onChange={() => onCompleteTask(task)} />
            </div>
            <p className={task.isComplete ? 'complete' : ''}>{task.txt}</p>
            <div className="remove-task" onClick={() => onRemoveTask(task.id)}>✕</div>
        </div>
    )
}