import './Welcome.css'

function Welcome() {
    return (
        <div className="welcome" id="/" >
            <div className="welcome-left">
                <div className="welcome-left-wrapper">
                    <h2><div className="welcome-message">Hey, My name is </div></h2>
                    <h3><div className="welcome-name">Judyta Filipkowska </div></h3>
                    <p className="welcome-desription">
                        and I am a Full-Stack Developer, and a wannabe dancer.
                        Originally from Poland, have lived in Portugal since 2019.
                    </p>
                </div>

            </div>
            <div className="welcome-right">
            </div>
        </div>
    )
}
export default Welcome;