import "./ProjectItem.css"


function ProjectItem({ project }) {
    return (
        <div>
            <img src={project.projectImg} alt="pic" className="project-item" />
        </div>
    );
}

export default ProjectItem;