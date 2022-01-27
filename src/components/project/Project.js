import "./Project.css"

function Project({ project }) {
    return (
        <div className="project">
            <a href={project.ptojectUrl} target="_blank" className="link"><h1 className="project-title">{project.projectTitle}</h1></a>
            <h4 className="project-subtitle">{project.projectSubtitle}</h4>
            <p className="project-description">{project.projectDesription}</p>
        </div>
    )
}

export default Project;