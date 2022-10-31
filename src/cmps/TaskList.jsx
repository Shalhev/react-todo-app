import { TaskPreview } from './TaskPreview'

export function TaskList({ tasks }) {

    return (
        <div className="task-list">
            <ul>
                {tasks.map(task => <TaskPreview task={task} />)}
            </ul>
        </div>
    )
}