import React from 'react'
import myPic from '../images/Alexia.JPG'

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <h1 className = "title">About Me</h1>
            <img className = "myPic" src={myPic}></img>
            <div id='abtMe'>
                <p>
                An explorer of the many, a master of becoming.
                </p>
                <p>
                That's me, navigating the unpredictable terrain of life and career with a compass that never wavers from its true north: innovation and growth.
                </p>
                <p>
                My path, much like a river, has meandered and forged new routes, but my destination – leveraging technology to sculpt a better world – has remained as constant as the speed of light. (Please share more nerdy jokes with me :) ) 
                </p>
            </div>
        </section>
    )
}

export default AboutMe