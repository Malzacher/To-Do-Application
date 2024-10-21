import { useRef } from "react";

export default function ProjectScreen({
  project,
  onRemoveProject,
  onAddTask,
  onRemoveTask,
}) {
  const taskName = useRef();

  if (!project) {
    return <p>Loading project...</p>; // Handle if project is undefined
  }

  return (
    <div className="p-8">
      {/* Project Title & Delete Button */}
      <div className="p-6 bg-white rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <button
          onClick={() => onRemoveProject(project)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Delete Project
        </button>
      </div>

      {/* Project Description */}
      <div className="p-6 bg-gray-50 rounded-lg shadow-md mb-6">
        <span className="text-sm text-gray-600">{project.dueDate}</span>
        <p className="text-base mt-2">{project.description}</p>
      </div>

      {/* Task Section */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <div className="flex items-center space-x-4 mb-4">
          <input
            type="text"
            ref={taskName}
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task"
          />
          <button
            onClick={() => {
              onAddTask(taskName.current.value);
              taskName.current.value = ""; // Clear the input after adding
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-4">
          {project.tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
            >
              <p className="text-base">{task}</p>
              <button
                onClick={() => onRemoveTask(task)}
                className="px-3 py-1 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition"
              >
                Clear Task
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
