import "../styles/index.css";

import { Link } from "react-router-dom";

import headshot from "../assets/MattWidenhouse.jpg";

export default function Index() {

    return (
        <>
            <div id="intro">Hi, I'm </div>
            <h1 id="aboutHeader">Matt Widenhouse</h1>
            <h2 id="aboutSubHeader">Software Engineer</h2>
            <Link id="resume" to="/mattwidenhouse_resume.pdf" target="_blank" download>Resume</Link>
            <div id="about">
                <img id="headshot" src={headshot}/>
                <p id="text">
                A software engineer based out of Norfolk Virginia. In 2023 I graduated from Old Dominion University with a B.S. in computer science and a minor
                in mathematics. My passions lie in game development, graphics programming and problem solving, with experience in web development, backend engineering, and system design.
                </p>
            </div>
        </>
    )
}