"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

function SearchBox() {

    const [search, setSearch] = useState("")
    const router = useRouter()

    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        router.push(`/search/${search}`)
    }

  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
        <input className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 " type="text" onChange={(e)=> setSearch(e.target.value)} value={search} placeholder="Search keywords..." />
        <button className="text-amber-600 disabled:text-gray-400 " disabled={search === ""}>Search</button>
    </form>
  )
}

export default SearchBox