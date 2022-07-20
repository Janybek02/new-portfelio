import React from 'react';
import dd from '../../assets/img/Vector 59.svg'
import aa from '../../assets/img/Group 123.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero--general">
                    <img className="hero--general__im1" src={dd} alt=""/>
                    <div className="hero--general__img">
                        <img className="img"
                        src={aa} alt=""/>

                    </div>
                    <div className="hero--general__p">
                        <h6>это студия цифровых инноваций, которая использует лучшую в своем классе
                            стратегию, дизайн и разработку.</h6>
                    </div>
                    <div className="hero--general__btn">
                        <button>Получить консультацию</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;