import "./ProjectList.css"
import Project from "../project/Project";
import ProjectItem from "../projectItem/ProjectItem";


function ProjectList() {
    return (
        <div className="project-list-wrapper">
            <div className="project-list-left">
                <Project />
            </div>
            <div className="project-list-right">
                <ProjectItem />
            </div>

        </div>
    );
}

export default ProjectList;