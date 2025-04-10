import { Link } from "react-router-dom";
import "../styles/notfound.css";

export default function NotFound() {
    return (
        <div className="notfound">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>

            <Link to="/">Go back home</Link>
        </div>
    )
}