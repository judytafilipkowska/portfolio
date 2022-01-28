import "./Project.css"

function Project({ project }) {
    return (
        <div className="project">
            <h1 className="project-title">{project.projectTitle}</h1>
            <h4 className="project-subtitle">{project.projectSubtitle}</h4>
            <p className="project-description">{project.projectDesription}</p>
            <div className="links">
                <a href={project.githubUrl} target="_blank">
                    <button>Github repo</button>
                </a>
                <a href={project.projectUrl} target="_blank">
                    <button> Live project</button>
                </a>
            </div>
        </div>
    )
}

export default Project;