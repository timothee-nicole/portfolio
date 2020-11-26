import React from 'react'
import data from '../data.json'

const ProjectCard = (props) => {
    const project = data.project[`${props.project}`]
    
    console.log(project)
    return (
        <div className="project-card">
            <img src={project.image} alt={project.name} />

            <div className="project-description">
            <h1> {project.name}</h1>
            <h2>Created in {project.duration} week</h2>
            <p>{project.description}</p>
            <p> Language used : {project.language}</p>
            <p> Front End : {project.frontEnd.map((elem, i) => 
               project.frontEnd.length <=1 ? `${elem}` : i === project.frontEnd.length ? ` and ${elem}` : `${elem}, `
            )} </p>
            <p> Back End : {project.backEnd.map((elem, i) => 
                project.backEnd.length <=1 ? `${elem}` : i === project.backEnd.length ? ` and ${elem}` : `${elem}, `
            )} </p>
            </div>
            <a href={project.link} target="_blank">
                Visit
            </a>
        </div>
    )
}

export default ProjectCard