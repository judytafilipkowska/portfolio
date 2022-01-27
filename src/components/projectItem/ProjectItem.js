import "./ProjectItem.css"
import Jobhunter from "../../image/jobhunter.png"


function ProjectItem() {
    return (
        <div>
            <img src={Jobhunter} alt="" className="project-item" />
        </div>
    );
}

export default ProjectItem;