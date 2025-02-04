import { ChevronRightIcon, Trash2 } from "lucide-react";

function Tasks({tasks, onTaskClick, onTrashClick}) {
  return (
    <ul className="space-y-4 p-6 rounded-md shadow bg-slate-200">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(tasks.id)}
            className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${
              tasks.isCompleted && "line-through"
            }`}
          >
            {tasks.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            {" "}
            <ChevronRightIcon />{" "}
          </button>
          <button onClick={() => onTrashClick(tasks.id)} className={`bg-red-600 p-2 rounded-md text-white`}>
            
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
