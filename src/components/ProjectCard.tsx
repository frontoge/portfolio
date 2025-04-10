
import "../styles/projectCard.css";
import "../styles/shared.css";

import githubLogo from "../assets/icons/iconmonstr-github-1.svg";

import {cpp, lua, sql, react, ts, opengl, bash} from "../assets/icons/languages";

import Pill from "./Pill";

export interface ProjectCardProps {
    tags?: string[];
    description?: string;
    title?: string;
    link?: string;
    icon?: string;
}

export default function ProjectCard(props: ProjectCardProps) {

    const icons = {
        cpp,
        lua,
        sql,
        react,
        ts,
        opengl,
        bash
    }

    return (
        <div className="card">
            <img className="icon" src={props.icon} alt="project Icon"/>
            <div className="card-content">
                <h1 className="title">{props.title}</h1>
                <p className="desc">{props.description}</p>
                <div className="card-link">
                    {
                        props.link &&
                        <>
                            <img className="card-github" src={githubLogo} alt="Github Logo" />
                            <a className="card-ref" href={props.link}>Repository</a>
                        </>
                    }
                </div>
            </div>  
            <div className="card-tags">
                {props.tags?.map((tag, index) => {
                    return (
                        <Pill
                            className="card-pill"
                            key={index}
                            icon={icons[tag as keyof typeof icons]}
                        />
                    )
                })}
            </div>
        </div>
    )
}