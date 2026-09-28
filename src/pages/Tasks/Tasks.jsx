//import React from 'react'
import background from "../../assets/f3bf63b856216b1f52d21300abc90037.jpg"
import { useState } from "react"
import TaskCard from './../../components/TaskCard/TaskCard';
import TaskForm from './../../components/TaskForm/TaskForm';
export default function Tasks({ tasks, setTasks  , filteredTasks , mainSearch}) {
  const [showForm, setShowForm] = useState(false)
  

  function handleToggle(id) {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    )
  )
}

function handleDelete(id) {
    console.log("Deleting:", id)
  setTasks((currentTasks) =>
    currentTasks.filter((task) => task.id !== id)
  )
}
function handleAddTask(newTask) {
  setTasks((currentTasks) => [
    ...currentTasks,
    newTask,
  ])

  setShowForm(false)
}

  return (
       <main className="min-h-screen bg-gray-100 px-8 py-10 bg-cover" style={{ backgroundImage: `url(${background})`  }}>
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col gap-3 items-center justify-between lg:flex-row lg:gap-0">
          <div>
            <h1 className="text-4xl font-bold text-white">
              My Tasks
            </h1>

            <p className="mt-2 text-white">
              Manage your tasks and stay productive.
            </p>
          </div>

          <button
  onClick={() => setShowForm(true)}
  className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700 w-full lg:w-fit"
>
  + Add Task
</button>
        </div>
                {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-lg">
            <TaskForm onAddTask={handleAddTask} />
          </div>
        </div>
)}
        <div className="mt-8 grid gap-5">
          {tasks.length === 0 && (
  <div className="text-center bg-white p-10 rounded-xl">
    <h2 className="text-3xl font-bold text-gray-800">
      Start your productive day! ✨
    </h2>

    <p className="mt-3 text-gray-500">
      Write your first task and get things done.
    </p>
  </div>
)}
          {mainSearch === ""  && (tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))) }
          {mainSearch  !==  "" && filteredTasks.length > 0 && ( filteredTasks.map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onToggle={handleToggle}
                        onDelete={handleDelete}
                      />
                    )) ) }
          {mainSearch !== "" && filteredTasks.length === 0 && <div className="text-center  bg-white text-red-600 text-4xl p-8 font-bold">No Match</div>  }

        </div>

      </div>
    </main>
  )
}
