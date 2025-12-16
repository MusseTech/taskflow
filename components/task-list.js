import TaskItem from "./task-item";

export default function TaskList({ tasks, onDelete, onToggleComplete }) {
    if (tasks.length === 0) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
                <p className="text-gray-500 text-lg">No tasks yet. Add your first task above!</p>
                </div>
        );
    }

    return (
        <div> 
            <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
        Your Tasks ({tasks.length})
        </h2>
        <div className="text-sm text-gray-600">
        Completed: {tasks.filter(t => t.completed).length} / {tasks.length}
        </div>
    </div>

    <div className="space-y-3">
        {tasks.map((task) => (
        <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
            />
            ))}     
            </div>
        </div>
    );
}