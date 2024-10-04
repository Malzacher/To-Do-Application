import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:border-stone-600";

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-400">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} ref={ref} {...props}></textarea>
      ) : (
        <input className={classes} ref={ref} {...props} />
      )}
    </div>
  );
});

export default Input;