import background from "../../assets/f3bf63b856216b1f52d21300abc90037.jpg"
export default function Dashboard({ tasks }) {
  const totalTasks = tasks.length

const completedTasks = tasks.filter(
  (task) => task.completed
).length

const pendingTasks = tasks.filter(
  (task) => !task.completed
).length
  return (
     <main className="min-h-screen px-8 py-10  bg-cover  bg-no-repeat " style={{ backgroundImage: `url(${background})`  }}>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-white">
          Good morning 👋
        </h1>

        <p className="mt-2 text-white">
          Here's your task overview.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Tasks</p>
            <h2 className="mt-2 text-3xl font-bold">{totalTasks}</h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Completed</p>
            <h2 className="mt-2 text-3xl font-bold">{completedTasks}</h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <p className="text-gray-500">Pending</p>
            <h2 className="mt-2 text-3xl font-bold">{pendingTasks}</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
