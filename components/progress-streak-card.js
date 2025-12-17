import { RingProgress, Text } from "@mantine/core";

export default function ProgressStreakCard({ completed, total, streak, onViewTasks }) {
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-3xl shadow-lg border-2 border-purple-300">
                <div className="flex items-center">
                    <div className="flex-1">

                {/* Streak Section */}
                <div className="flex flex-col mb-6">
                    <span className="text-3xl">🔥</span>
                    <h3 className="text-lg font-bold text-gray-800 mt-2">{streak}-Day Streak</h3>
                </div>

                <p className="text-gray-700 font-medium mb-6">Your today's task<br />
                <span className="text-gray-700">almost done</span>
                </p>

                {/* Progress Ring */}
                <div className="flex item-center justify-center mb-4">
                <RingProgress
                    size={180}
                    thickness={18}
                    sections={[
                        { value: percentage, color: "#4CAF50" }]}
                        label={
                            <Text size="xl" fw={700} ta="center">{percentage}%</Text>}
                    />
                    </div>

                    {/* View Task Button */}
                    <button 
                    onClick={onViewTasks}
                    className="mt-4 px-4 py-1.5 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition-colors">View Tasks
                    </button>
                </div>
            </div>
        </div>
    );
}