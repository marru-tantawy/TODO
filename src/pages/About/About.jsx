import React from 'react'
import background from "../../assets/f3bf63b856216b1f52d21300abc90037.jpg"


export default function About() {
  return (
     <main className="min-h-screen bg-gray-100 px-8 py-10 bg-cover" style={{ backgroundImage: `url(${background})`  }}>
      <div className="mx-auto max-w-4xl">

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900">
            About TaskFlow
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            TaskFlow is a simple task management application
            built with React to help users organize their daily tasks.
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Built With
            </h2>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-lg bg-indigo-100 px-4 py-2 text-indigo-700">
                React
              </span>

              <span className="rounded-lg bg-indigo-100 px-4 py-2 text-indigo-700">
                React Router
              </span>

              <span className="rounded-lg bg-indigo-100 px-4 py-2 text-indigo-700">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
