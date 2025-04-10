import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


import "../styles/shared.css"

export default function Layout() {
    
    return (
        <div className="content">
            <Navbar />
            <Outlet />
            <Sidebar />
        </div>
    )
}