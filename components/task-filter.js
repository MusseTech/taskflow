export default function TaskFilter({ currentFilter, onFilterChange }) {
    const filters = [ 'All', 'Work', 'Personal', 'Health', 'School', 'Others' ];

    const filterColors = {
        All: 'bg-gray-600 hover:bg-gray-700',
        Work: 'bg-blue-600 hover:bg-blue-700',
        Personal: 'bg-purple-600 hover:bg-purple-700',
        Health: 'bg-green-600 hover:bg-green-700',
        School: 'bg-pink-600 hover:bg-pink-700',
        Others: 'bg-orange-600 hover:bg-orange-700',
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => onFilterChange(filter)}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition-all ${currentFilter === filter ? filterColors[filter] + ' ring-2 ring-offset-2 ring-gray-300' : 'bg-gray-400'}`}>
                        {filter} 
                    </button>
                ))}
            </div>
        </div>
    );
}