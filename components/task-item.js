export default function TaskItem({ task, onDelete, onToggleComplete }) {

    const priorityColors = {
        High: "bg-red-100 text-red-800 border-red-200",
        Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
        Low: "bg-green-100 text-green-800 border-green-200",
    };

    const categoryColors = {
        Work: "bg-blue-100 text-blue-800",
        Personal: "bg-purple-100 text-purple-800",
        Health: "bg-green-100 text-green-800",
        School: "bg-pink-100 text-pink-800",  
        Others: "bg-gray-100 text-gray-800",
    };

    return (
        <div className={`bg-white p-4 rounded-lg shadow-sm border-2 ${priorityColors[task.priority]} mb-3`}>
            <div className="flex items-start justify-between">
                {/* Left side - Checkbox and Task */}
                    <div className="flex items-start space-x-3 flex-1">
                    {/* Checkbox */}
                <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />

            {/* Task Content */}
            <div className="flex-1">
                <p className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                {task.text}
                </p>
            
                {/* Category and Priority Badges */}
                <div className="flex gap-2 mt-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[task.category]}`}>
                {task.category}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                    {task.priority}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {task.points} pts
                </span>
                </div>
            </div>
            </div>

            {/* Right side - Delete Button */}
            <button
            onClick={() => onDelete(task.id)}
            className="ml-4 text-red-600 hover:text-red-800 hover:bg-red-50 p-2 rounded transition-colors"
            title="Delete task"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </button>
        </div>
        </div>
    );
}
