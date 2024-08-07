import React from 'react'
import ip from '../images/InProgress.png'
import alexia from '../images/alexia.mp4'
import mappi from '../images/Mappi.mp4'
import tac from '../images/tac.mp4'
import sudoku from '../images/sudoku.mp4'
import snapp from '../images/snapp.mp4';

const Projects = () => {
    return (
        <section id="projects">
            <h1 className = "title">Projects</h1>
            <div className="grid">
                <div>
                    <img src={ip} alt="Project 1"/>
                    <div className="description">
                        <p>RWalker</p>
                    </div>
                </div>
                <div>
                    <video src={alexia} alt="Project 3" autoPlay loop muted />
                    <div className="description">
                        <p>Alexia</p>
                    </div>
                </div>
                <div>
                <video src={mappi} alt="Project 3" autoPlay loop muted />
                    <div className="description">
                        <p>MAPpi</p>
                    </div>
                </div>
                <div>
                <video src={tac} alt="Project 3" autoPlay loop muted />
                    <div className="description">
                        <p>TactiConnect</p>
                    </div>
                </div>
                <div>
                    <img src={ip} alt="Project 1"/>
                    <div className="description">
                        <p>OTPulse</p>
                    </div>
                </div>
                <div>
                    <video src={sudoku} alt="Project 3" autoPlay loop muted />
                    <div className="description">
                        <p>Sudoku</p>
                    </div>
                </div>
                <div>
                    <video src={snapp} alt="Project 3" autoPlay loop muted />
                    <div className="description">
                        <p>SNAPP</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects