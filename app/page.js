"use client";
import { useEffect, useState } from "react";
import Header from "../components/header";
import TaskInput from "../components/task-input";
import TaskList from "../components/task-list";
import Badges from "../components/badges";
import BadgePopup from "../components/badge-popup";
import ProgressStreakCard from "../components/progress-streak-card";


export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [showBadgePopup, setShowBadgePopup] = useState(false);
    const [earnedBadges, setEarnedBadges] = useState([]);
    const [currentBadgeLevel, setCurrentBadgeLevel] = useState(0);
    const [categoryFilter, setCategoryFilter] = useState("All");
    const [streak, setStreak] = useState(3);
    const [quote, setQuote] = useState('"Make it doable."');

    const handleEditTask = (taskId, newText) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, text: newText } : task
        ));
    };

    const scrollToTasks = () => {
        const tasksSection = document.getElementById("tasks-section");
        if (tasksSection) {
            tasksSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        fetch("https://api.quotable.io/random?maxLength=120")
            .then(res => res.json())
            .then(data => {
                setQuote(`"${data.content}" — ${data.author}`);
            })
            .catch(() => {
                setQuote('"Make it doable."');
            });
    }, []);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    const completedCount = updatedTasks.filter((task) => task.completed).length;

    let newBadgeLevel = null;

    if (completedCount >= 20 && !earnedBadges.includes(3)) {
        newBadgeLevel = 3;
    } else if (completedCount >= 8 && !earnedBadges.includes(2)) {
        newBadgeLevel = 2;
    } else if (completedCount >= 3 && !earnedBadges.includes(1)) {
        newBadgeLevel = 1;
    }

    if (newBadgeLevel) {
        setCurrentBadgeLevel(newBadgeLevel);
        setShowBadgePopup(true);
        setEarnedBadges([...earnedBadges, newBadgeLevel]);
    }
    };

    const totalPoints = tasks
        .filter((task) => task.completed)
        .reduce((sum, task) => sum + task.points, 0);

    return ( 
        <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)' }}>
            <Header quote={quote} />
            <main className="max-w-5xl mx-auto py-8">
                {/* Points & Level Display */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg" style={{ border: '3px solid #9C89B8' }}>
                    <p className="text-sm text-gray-600 mb-1">Total Points</p>
                    <p className="text-5xl font-bold" style={{ color: '#9C89B8' }}>{totalPoints}</p>
                </div>
                {/* Level Card */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg" style={{ border: '3px solid #4CAF50' }}>
                    <p className="text-sm text-gray-600 mb-1">Level</p>
                    <p className="text-5xl font-bold" style={{ color: '#4CAF50' }}>{Math.floor(totalPoints / 100) + 1}</p>
                </div>

                { /* Progress & Streak Card */}
                <div className="mt-4">
                    <ProgressStreakCard
                    completed={tasks.filter(t => t.completed).length}
                    total={tasks.length}
                    streak={streak}
                    onViewTasks={scrollToTasks}
                    />
                </div>

                {/* Badges Display */}
                <div className="mt-4">
                    <Badges tasks={tasks} />
                </div>

                {/* Task Input */}
                <TaskInput onAddTask={addTask} />

                {/* Task List */}
                <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggleComplete={toggleComplete}
                    onEdit={handleEditTask}
                    id="task-list"
                />

                {/* Badge Popup */}
                {showBadgePopup && (
                    <BadgePopup
                        level={currentBadgeLevel}
                        onClose={() => setShowBadgePopup(false)}
                    />
                )}
            </main>
        </div>
    );
}
