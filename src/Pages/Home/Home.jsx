import Navbar from "../../components/Navbar"
import React, { useState, useEffect, useContext } from "react"
import Sidebar from "../../Components/Sidebar"
import { GlobalContext } from "../../Context/GlobalState";
import Todos from "../../Components/Todos";

import { Navigate } from "react-router-dom";

const Home = () => {
    const {state , dispatch} = useContext(GlobalContext);

    const isLoggedIn = state.isAuthenticated;
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    const handleToggleSidebar = () => {
        dispatch({type:"TOGGLE_SIDEBAR"})
    }

    return (
        <div className={`${state.theme === "dark" ? "bg-[#242424] text-white" : "bg-[#FBFDFC] text-black"}  w-full overflow-y-visible pointer-events-auto`}>
            <Navbar />
            <div className="w-full flex flex-row ">
            {state.isSidebarVisible && <Sidebar className="px-10"/>}
            <Todos/>

            {/* I have created the component , But It was not cler from the figma that when (at click) to display this component  */}
            {/* <TodoDetails/> */}
            </div>
        </div>
    )
}

export default Home