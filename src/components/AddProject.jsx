export default function AddProject() {
  return (
    <div className="w-{35rem] mt-16">
    <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" >Cancel</button>
    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>

      <div className="mt-24 text-center w-2/3">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea
          class="border border-gray-300 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          placeholder="Enter your message..."
        ></textarea>
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input
          type="date"
          class="border border-gray-300 rounded-md shadow-sm w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
}
