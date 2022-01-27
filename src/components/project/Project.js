import "./Project.css"
function Project() {
    return (
        <>
            <div className="project">
                <a href="http://jobhunterbyjandm.herokuapp.com/" target="_blank" className="link"><h1 className="project-title"> JobHunter</h1></a>
                <h4 className="project-subtitle">Full-stack project created with Node.Js, Express.Js, Handlebars.Js MongoDB and Mongoose.</h4>
                <p className="project-description"> Job hunter is a job board where you can find the latest career opportunities that most adequate your professional profile.
                    More description and mention Margarida add link to github?</p>
            </div>
        </>
    );
}

export default Project;