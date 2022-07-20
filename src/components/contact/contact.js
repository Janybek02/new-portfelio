import React from 'react';

const Contact = () => {
    return (
        <section id='contact'>
            <div className="container">
                <h1>Контакты </h1>
                <div className="contact--general">

                    <div className='contact--general_about'>
                        <p> motionwebteam@gmail.com</p>
                        <p> @medudev</p>
                        <p>  motion-web it club</p>
                        <p>  motion-web</p>
                        <p>+996 779 182 232</p>
                    </div>

                    <div className='contact--general-cart'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10180.229435659276!2d74.57678595823297!3d42.87509671842815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec82378addad3%3A0xec8900a592c26b47!2z0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1657558676691!5m2!1sru!2skg"
                            style={{width:"400px", height:"300px"}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Contact;