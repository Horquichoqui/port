// import { useState } from "react";

import { useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
// import AddTasks from "./components/AddTasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React whit Node.JS",
      isCompleted: false,
      showTask: true,
    },
    {
      id: 2,
      title: "Learn Next.js",
      description: "Learn Next.js with React",
      isCompleted: false,
      showTask: true,
    },
    {
      id: 3,
      title: "Learn GraphQL",
      description: "Learn GraphQL with Node.JS and Apollo Server",
      isCompleted: false,
      showTask: true,
    },
  ]);

  function onTaskClick(id) {
    const updatedTasks = tasks.map(
      (task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task

      // if (taks.id === id){return {...task, isCompleted: !task.isCompleted return;}}
    );
    setTasks(updatedTasks);
  }

  function onTrashClick(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function onAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks Manager
        </h1>
        <AddTask onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}

export default App;
