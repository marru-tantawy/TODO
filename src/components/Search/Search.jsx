import React from 'react'

export default function Search({ mainSearch , setmainSearch}) {


    return (
        <div className=' text-black'>
      <input type="search" name="search" id="" value={mainSearch}  onChange={(e) => setmainSearch(e.target.value)} placeholder="Search your tasks..."
  className="w-full rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-gray-800 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"/>
    </div>
  )
}
