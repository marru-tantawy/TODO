import React from 'react'
import { useState } from 'react';

export default function TaskForm({onAddTask}) {
      const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (!title.trim()) return

    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }

    onAddTask(newTask)

    setTitle("")
    setDescription("")
  }

  return (
     <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Add New Task
      </h2>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Task Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          rows="3"
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <button
        type="submit"
        className="mt-5 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        Add Task
      </button>
    </form>
  )
}
