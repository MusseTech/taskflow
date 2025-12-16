"use client";
import { useState } from "react";
import Header from "../components/header";
import TaskInput from "../components/task-input";
import TaskList from "../components/task-list";


export default function Home() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const totalPoints = tasks
        .filter((task) => task.completed)
        .reduce((sum, task) => sum + task.points, 0);

    return ( 
        <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FFB7C5 0%, #C8E6C9 25%, #BBDEFB 50%, #FFF9C4 75%, #FFCCBC 100%)' }}>
            <Header />
            <main className="max-w-5xl mx-auto py-8">
                {/* Points & Level Display */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg" style={{ border: '3px solid #9C89B8' }}>
                    <p className="text-sm text-gray-600 mb-1">Total Points</p>
                    <p className="text-5xl font-bold" style={{ color: '#9C89B8' }}>{totalPoints}</p>
                </div>
                {/* Level Card */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg" style={{ border: '3px solid #FFB7C5' }}>
                    <p className="text-sm text-gray-600 mb-1">Level</p>
                    <p className="text-5xl font-bold" style={{ color: '#FFB7C5' }}>{Math.floor(totalPoints / 100) + 1}</p>
                </div>

                {/* Task Input */}
                <TaskInput onAddTask={addTask} />

                {/* Task List */}
                <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggleComplete={toggleComplete}
                />
            </main>
        </div>
    );
}
