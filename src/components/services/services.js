import React from 'react';
import mask from '../../assets/img/phone.jpg'
import aa from '../../assets/img/ser.png'


const Services = () => {
    return (
        <section id='services'>
            <div className="container">
                <div className="services--general">
                 <h1 className="services--general__title">Услуги</h1>
                    <div className="services--general__bl1">
                        <div className="services--general__block1">
                            <div className="services--general__block1__block">
                                <div className="services--general__block1__bl">
                                    <img className="services--general__block1__bl--imeg" src={mask} alt=""/>
                                </div>
                                <h2>Разработка web <br/>сайтов</h2>
                                <h3>Сайт визитка, <br/>корпоративный сайт,
                                    <br/>лэндинг, поддержка сайта….</h3>
                            </div>
                            <div className="services--general__f1">

                            </div>
                        </div>
                        <div className="services--general__block1">
                            <div className="services--general__block1__block">
                                <div className="services--general__block1__bl">
                                    <img className="services--general__block1__bl--imeg" src={mask}
                                          alt=""/>
                                </div>
                                <h2>Разработка мобильных <br/>приложений</h2>
                                <h3>Моб приложения для IOS и <br/>Android операционных <br/>систем, Гибридные
                                    <br/>мобильные приложения…</h3>
                            </div>
                            <div className="services--general__f1">

                            </div>
                        </div>
                        <div className="services--general__block1">
                            <div className="services--general__block1__block">
                                <div className="services--general__block1__bl">
                                    <img className="services--general__block1__bl--imeg" src={mask} alt=""/>
                                </div>
                                <h2>Дизайн студия</h2>
                                <h3>Дизайн сайтов и <br/>мобильных приложений, <br/>UI/UX дизайн.</h3>
                            </div>
                            <div className="services--general__f1">

                            </div>
                        </div>
                        <div className="services--general__block1">
                            <div className="services--general__block1__block">
                                <div className="services--general__block1__bl">
                                    <img className="services--general__block1__bl--imeg" src={mask} alt=""/>
                                </div>
                                <h2>Техническая <br/>поддержка</h2>
                                <h3>Осуществляем <br/>техническую поддержку <br/>любого проекта.</h3>
                            </div>
                            <div className="services--general__f1">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Services;


//rsc