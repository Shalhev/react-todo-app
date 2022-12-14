import { TaskPreview } from './TaskPreview'

export function TaskList({ tasks, onRemoveTask, onCompleteTask }) {

    return (
        <div className="task-list">
            {tasks.map(task =>
                <TaskPreview
                    task={task}
                    key={task.id}
                    onRemoveTask={onRemoveTask}
                    onCompleteTask={onCompleteTask}
                />)}
            <p className='no-tasks'>{!tasks.length ? 'No tasks' : ''}</p>
        </div>
    )
}