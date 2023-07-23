import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const AboutMe = () => {
    const [isOpenHKU, setIsOpenHKU] = useState(false);
    const [isOpenHKU2, setIsOpenHKU2] = useState(false);
    const [isOpenHKU3, setIsOpenHKU3] = useState(false);
    const [isOpenLSCC, setIsOpenLSCC] = useState(false);

    return (
        <section id="edu">
            <h1 className="title">Education</h1>
                <div id='school' className='gridContainer'>
                    <div id='eduLogo' className='gridItem'></div>
                    <div id='schoolName' className='gridItem' >
                        <h1>University of Hong Kong</h1>
                        <p><i>Where I start my adventure</i></p>
                        <br></br>
                        <p>Expected Graduation Date: Jun 2025</p>
                        <p>BEng - Major in Computer Science</p>
                        <br></br>
                        <p>#Chairperson, #Technical Lead, #Chi Sun College, #STEM Education</p>
                    </div>
                    <div id='ECA' className='gridItem'>
                    </div>
                </div>
                <div id='school2' className='gridContainer'>
                    <div id='eduLogo2' className='gridItem'></div>
                    <div id='schoolName' className='gridItem'>
                        <h1>Leung Shek Chee College</h1>
                        <p><i>A girl school where my teachers and I pioneered STEM</i></p>
                        <p><i>It was life-changing when my cookery lessons were changed to STEM :)</i></p>
                        <br></br>
                        <p>Graduation Date: Aug 2021</p>
                        <p>Specialized in: Phy, Chem, Bio</p>
                        <br></br>
                        <p>#Outstanding Student of the District, #Head Prefect, #Robotics Team Lead, #Secretly want to become a writer :0</p>
                    </div>
                    <div id='ECA' className='gridItem'>
                    </div>
            </div>
        </section>
    )
}

export default AboutMe;