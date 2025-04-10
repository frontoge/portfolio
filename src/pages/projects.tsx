import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";
import "../styles/projects.css";

import {EdenIcon, SimpleTimeTrackerIcon, VcpkgScaffoldIcon} from "../assets/icons/project";

export default function Projects() {

    const projects: ProjectCardProps[] = [
        {
            title: "Eden RP",
            description: "Eden is a GTA V roleplay server built on the FiveM network. " +
            "At its largest it served over 600 players from north america and europe. " +
            "This started as a hobby project before college and has since grown into a fully deployed project",
            tags: ["lua", "sql", "react", "ts"],
            icon: EdenIcon,
        },
        {
            title: "SimpleTimeTracker",
            description: "This is a very simple time tracker application I built to track time spent on projects, as well as get familiar with the ImGui library for C++.",
            link: "https://github.com/frontoge/SimpleTimeTracker",
            icon: SimpleTimeTrackerIcon,
            tags: ["cpp"],
        },
        {
            title: "vcpkg scaffolder",
            description: "A simple bash script that creates a vcpkg application for C++",
            link: "https://github.com/frontoge/vcpkg-scaffold",
            icon: VcpkgScaffoldIcon,
            tags: ["bash"],
        },
    ]

    return (
        <div className="projects-page">
            <div className="projects">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            tags={project.tags}
                            description={project.description}
                            title={project.title}
                            link={project.link}
                            icon={project.icon}
                        />
                    )
                })}
            </div>
        </div>
    )
}