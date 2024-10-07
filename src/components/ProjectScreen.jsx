export default function ProjectScreen() {
  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Heading</h1>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Delete
        </button>
      </div>

      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <span className="text-sm text-gray-600">Date</span>
        <p className="text-base mt-2">Description</p>
      </div>

      <br />

      <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500"
          placeholder="Add a new task"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-6">
          Add Task
        </button>

        <ul className="list-none">
          <li className="flex justify-between items-center p-4 border-b border-gray-200">
            <p className="text-base">Task Name</p>
            <button className="px-3 py-1 bg-gray-300 text-black rounded hover:bg-gray-400 transition">
              Clear
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
