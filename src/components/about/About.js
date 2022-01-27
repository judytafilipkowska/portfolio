import './About.css'
import Traveller from "../../image/traveller.png"
import Dots from "../../image/dots.png"

function About() {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-component background"></div>
                <div className="about-component">
                    <img src={Traveller} alt="" className="about-picture" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-heading">About me</h1>
                <p className="about-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id facilis. Ea sapiente aliquam inventore, aperiam possimus voluptatibus beatae veniam soluta maxime omnis cum reiciendis veritatis, dolores placeat, esse qui.</p>
                <div className="about-pics">
                    <img src={Dots} alt="" className="about-dots" />
                </div>
            </div>
        </div>
    );
}

export default About;