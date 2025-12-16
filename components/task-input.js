"use client";
import { useState } from "react";

export default function TaskInput({ onAddTask }) {
    const [taskText, setTaskText] = useState("");
    const [category, setCategory] = useState("Personal");
    const [priority, setPriority] = useState("Medium");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (taskText.trim() === "") {
            alert ("Please enter a task!");
            return;                 
        }

        const newTask = {
            id: Date.now(),
            text: taskText,
            category,
            priority,
            completed: false,
            points: priority === "High" ? 30 : priority === "Medium" ? 20 : 10,
        };

        onAddTask(newTask);
        setTaskText("");
        setCategory("Personal");
        setPriority("Medium");
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border-2 border-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Task Text Input */} 
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Task
                </label>
                <input 
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter your task..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"/>
            </div>
                {/* Category and Priority - Side by Side */}
                <div className="grid grid-cols-2 gap-4">
                    {/* Category Dropdown */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Health">Health</option>
                    <option value="School">School</option>
                    <option value="Others">Others</option>
                    </select>
                    </div>
                {/* Priority Dropdown */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Priority
                    </label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>

            {/* Add Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium">
                + Add Task
                </button>
            </form>
        </div>
    );
}


            


