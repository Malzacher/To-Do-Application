import Input from "./Input";
import { useRef } from "react";

export default function AddProject({ onAddProject, onCancelProject }) {
  let title = useRef();
  let description = useRef();
  let dueDate = useRef();

  return (
    <div className="w-[35rem] mt-16 bg-white shadow-lg rounded-lg p-6">
      <menu className="flex items-center justify-end gap-4 mb-6">
        <li>
          <button
            onClick={onCancelProject}
            className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={() => onAddProject({
              title: title.current.value,
              description: description.current.value,
              dueDate: dueDate.current.value
            })}
            className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300"
          >
            Add
          </button>
        </li>
      </menu>
      <div className="space-y-4">
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
}
