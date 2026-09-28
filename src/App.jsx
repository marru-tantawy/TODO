 import './App.css'
 import { useState  , useEffect} from "react"
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard';
import Tasks from './pages/Tasks/Tasks';
import About from './pages/About/About';

export default function App() {
    const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Finish React project",
            description: "Complete the React SPA for Codveda internship.",
            completed: false,
          },
          {
            id: 2,
            title: "Practice JavaScript",
            description: "Solve some JavaScript problems.",
            completed: true,
          },
        ]
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const [mainSearch, setmainSearch] = useState("")
  const filteredTasks = tasks.filter(
        (task) => (task.title.toLowerCase().includes(mainSearch.toLowerCase())) 
        
    )

  return (
    <>
    <BrowserRouter>
      <Navbar tasks={tasks} mainSearch={mainSearch} setmainSearch={setmainSearch}/>

       <Routes>
        <Route
  path="/"
  element={<Dashboard tasks={tasks} />}
/>
        <Route
  path="/tasks"
  element={<Tasks tasks={tasks} setTasks={setTasks} mainSearch={mainSearch} setmainSearch={setmainSearch} filteredTasks={filteredTasks} />}
/>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}



