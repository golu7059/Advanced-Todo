import Navbar from "../../components/Navbar"
import React, { useState, useEffect, useContext } from "react"
import Sidebar from "../../Components/Sidebar"
import { GlobalContext } from "../../Context/GlobalState";
import AddToDo from "../../Components/AddTodo";
import Todos from "../../Components/Todos";
import TodoDetails from "../../Components/TodoDetails";

const Home = () => {
    const {state , dispatch} = useContext(GlobalContext);

    const handleToggleSidebar = () => {
        dispatch({type:"TOGGLE_SIDEBAR"})
    }

    return (
        <div className={`${state.theme === "dark" ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"}  w-full overflow-y-visible pointer-events-auto`}>
            <Navbar />
            <div className="w-full flex flex-row ">
            {state.isSidebarVisible && <Sidebar className="px-10"/>}
            <Todos/>
            {/* <TodoDetails/> */}
            </div>
        </div>
    )
}

export default Home