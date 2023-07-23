import React from "react";

const ContactMe = () => {
    return (
        <section id="contactMe">
            <h1 className = "sideTitle">Let's Talk !</h1>
            <div id="info">
                <div className='contacts'>
                    <a href="tel:+85291487515"> 
                        <span><ion-icon name="call-outline"></ion-icon></span>
                        <span className="details">Call</span>
                    </a>
                </div>
                <div className='contacts'>
                    <a href="https://wa.me/85291487515">
                        <span><ion-icon name="logo-whatsapp"></ion-icon></span>
                        <span className="details">Whatsapp</span>
                    </a>
                </div>
                <div className='contacts'>
                    <a href="https://www.linkedin.com/in/alexia-chan">
                        <span><ion-icon name="logo-linkedin"></ion-icon></span>
                        <span className="details">LinkedIn</span>
                    </a>
                </div>
                <div className='contacts'>
                    <a href="mailto:alxchn@connect.hku.hk">
                        <span><ion-icon name="mail-outline"></ion-icon></span>
                        <span className="details">Email</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactMe;