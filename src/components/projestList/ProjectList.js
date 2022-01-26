import "./ProjectList.css"
import Project from "../project/Project";
import ProjectItem from "../projectItem/ProjectItem";


function ProjectList() {
    return (
        <> 
        <div className="projects">
        <h1 className="projects-heading">My projects</h1>
        </div>
        
        <div className="project-list">
            <div className="project-list-left">
                <Project />
            </div>
            <div className="project-list-right">
                <ProjectItem />
            </div>

        </div>
        </>
    );
}

export default ProjectList;