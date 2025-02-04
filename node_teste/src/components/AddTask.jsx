import { useState } from "react";

function AddTask({ onAddTask }) {
  const [title, setTitles] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);
  return (
    <div className="bg-slate-400 p-2 space-y-4 rounded-md flex flex-col text-black">
      <input
        type="text"
        className="border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitles(event.target.value)}
        placeholder="Digite o titulo"
      />
      <input
        type="text"
        className="border border-slate-200 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a description"
      />
      <button
        onClick={() => onAddTask(title, description)}
        className="bg-slate-600 text-white rounded-md px-4 py-2"
      >
        {" "}
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
