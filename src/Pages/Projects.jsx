import React from 'react'
import ProjectCard from '../Components/ProjectCard.jsx'
import '../styles/project.css'
import withLanguage  from '../Components/Context/withLanguage'

const projectArr = ["pokemon", "ekam", "trip"]

function Projects(props) {

    
    return (
        <div className="project">
            {projectArr.map(elem => {
                return <ProjectCard project={elem} />
            })}
        </div>
    )
}

export default withLanguage(Projects)