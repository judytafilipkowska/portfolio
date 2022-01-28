import './About.css'
import Traveller from "../../image/traveller.png"
import Dots from "../../image/dots.png"

function About() {
    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="about-component">
                    <img src={Traveller} alt="" className="about-picture" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-heading">About me</h1>
                <p className="about-description">
                    <p className="about-description"> I'm a full-stack developer, keen on back-end technologies and working on a better UI. Besides that, I practice modern style dancing and learn to play ukulele. </p>
                    <p className="about-description">I’m a big fan of pan-Asian cuisine. I love hiking and kayaking, and I admit that kayaking awakens my inner athlete, who usually breaths heavily when walking.</p>
                    <p className="about-description"> My plans programming-wise are to master technologies I work with and improve those by learning Redux and SQL databases, and then I plan to learn Python.</p>

                    <span>Fun facts:</span>
                    <ul>
                        <li className='list'>   I have a tough time telling apart left and right.</li>
                        <li className='list'>My record of steps taken throughout one day is 41 402.</li>
                        <li className='list'> Once I had been eating lasagna for three weeks straight, every day.</li>
                    </ul>
                </p>
                <div className="about-pics">
                    <img src={Dots} alt="" className="about-dots" />
                </div>
            </div>
        </div>
    );
}

export default About;