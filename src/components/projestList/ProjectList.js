import "./ProjectList.css"
import Project from "../project/Project";
import ProjectItem from "../projectItem/ProjectItem";
import data from "../../data.json"
import Dots from "../../image/dots-long.png"
import { useState } from "react/cjs/react.development";

function ProjectList() {

    const [projects, setProjects] = useState(data)
    return (
        <>
            {projects.map((project) => {
                return (
                    <>
                        <div className="project-list-wrapper">
                            <div className="project-list-left">


                                <Project project={project} />

                            </div>
                            <div className="project-list-right">
                                <ProjectItem />
                            </div>

                        </div>
                        <div className="div-dots">
                          <img src={Dots} alt="" className="dots" />
                        </div>
                    </>
               

                )
            })

            }

        </>
    );
}

export default ProjectList;