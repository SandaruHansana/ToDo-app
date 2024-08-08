import React from 'react';

//Component for task filter All, Completed and Not-Completed

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`mr-2 px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`mr-2 px-4 py-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('not_completed')}
        className={`px-4 py-2 rounded ${filter === 'not_completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Not Completed
      </button>
    </div>
  );
};

export default TaskFilter;
