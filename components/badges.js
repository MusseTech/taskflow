export default function Badges({ tasks }) {
    const completedCount = tasks.filter((task) => task.completed).length;

    const badgeLevels = [
        { level: 1, required: 3, image: "/badges/Level1.png" },
        { level: 2, required: 8, image: "/badges/Level2.png" },
        { level: 3, required: 20, image: "/badges/Level3.png" },
    ];

    return (
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg" style={{ border: '3px solid #FFB6C1' }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#FF69B4' }}>Badges</h2>
            <div className="flex gap-4">
                {badgeLevels.map((badge) => (
                    <div key={badge.level} className="text-center">
                        <div className={`relative ${completedCount >= badge.required ? 'opacity-100' : 'opacity-30'}`}>
                            <img
                                src={badge.image}
                                alt={`Level ${badge.level} Badge`}
                                className="w-24 h-24 mx-auto" />
                            {completedCount >= badge.required && (
                                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center"></div>
                                    )}
                                </div>
                                <p className="mt-2 font-semibold">Level {badge.level}</p>
                                <p className="text-sm text-gray-600">{completedCount >= badge.required ? 'Earned' : `Complete ${badge.required} tasks`}</p>
                        </div>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-600">Completed tasks: <span className="font-bold">{completedCount}</span>
                    </p>
        </div>
    );
}