//import React from 'react'
import { Link } from 'react-router-dom'
import Search from './../Search/Search';
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
export default function Navbar({tasks , mainSearch ,setmainSearch}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const myTasks = tasks
  return (
     <nav className="flex items-center justify-between bg-green-950 text-white p-8">
      <Link to="/" className="text-2xl font-bold  border-2 p-2 rounded-2xl">
        Task Manager
      </Link>
        <div>
          <div className='lg:hidden relative'  onClick={() => setMenuOpen(!menuOpen)}>
                <FiAlignJustify />
                {menuOpen && (
  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-white text-black p-4 shadow-lg">
    
    <Link to="/" className="block py-2 hover:text-indigo-600">
      Dashboard
    </Link>

    <Link to="/tasks" className="block py-2 hover:text-indigo-600">
      Tasks
    </Link>

    <Link to="/about" className="block py-2 hover:text-indigo-600">
      About
    </Link>

  </div>
)}
          </div>
          <div className='hidden lg:flex items-center gap-6'>
                <div className='bg-navy m-2 p-2 '>
          <Search tasks={myTasks} mainSearch={mainSearch} setmainSearch={setmainSearch} />
        </div>
      <div className="flex gap-6">
        <Link
          to="/"
          className=" transition hover:text-indigo-600"
        >
          Dashboard
        </Link>

        <Link
          to="/tasks"
          className=" transition hover:text-indigo-600"
        >
          Tasks
        </Link>

        <Link
          to="/about"
          className="transition hover:text-indigo-600"
        >
          About
        </Link>
      </div>
          </div>
          
        </div>
    </nav>
  )
}
