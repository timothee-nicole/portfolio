import React from 'react'
import ProjectCard from '../Components/ProjectCard.jsx'
import '../styles/project.css'

const projectArr = ["pokemon", "ekam", "trip"]

export default function Projects() {
    return (
        <div className="project">
            {projectArr.map(elem => {
                return <ProjectCard project={elem} />
            })}
        </div>
    )
}
