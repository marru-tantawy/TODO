import React from 'react'

export default function TaskCard({task , onDelete , onToggle}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">

        <div>
          <h2
            className={`text-lg font-semibold ${
              task.completed
                ? "text-gray-400 line-through"
                : "text-gray-900"
            }`}
          >
            {task.title}
          </h2>

          <p className="mt-2 text-gray-500">
            {task.description}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>

      </div>

      <div className="mt-5 flex gap-3">

        <button
          onClick={() => onToggle(task.id)}
          className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
        >
          Delete
        </button>

      </div>
    </div>
  )
}
