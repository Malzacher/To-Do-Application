import Input from "./Input";

export default function AddProject({onCancelProject}) {

  return (
    <div className="w-[35rem] mt-16  bg-white shadow-lg rounded-lg p-6">
      <menu className="flex items-center justify-end gap-4 mb-6">
        <li>
          <button onClick={onCancelProject} className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
            Cancel
          </button>
        </li>
        <li>
          <button onClick={null} className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300">
            Add
          </button>
        </li>
      </menu>
      <div className="space-y-4">
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
