import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const path = location.pathname;

    console.log(path);

    return (
        <div className="nav">
            <Link to="/" className={path == "/" ? "active" : undefined}>About Me</Link>
            <Link to="/projects" className={path == "/projects" ? "active" : undefined}>My Projects</Link>
        </div>
    )
}