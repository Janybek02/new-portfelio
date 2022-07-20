import React from 'react';
import com from '../../assets/img/comand.png'
import com2 from '../../assets/img/comand2.png'
import li from '../../assets/img/l.png'

const about = () => {
    return (
        <section id='about'>
            <div className="container">
                <div className="about--general">
                    <h1 className="about--general__title">О нас</h1>
                    <div className="about--general__block">
                        <div className="about--general__text1">
                            <h6 className="about--general__text1--text"><br/>Мы стремимся создавать
                                <br/>уникальные и передовые
                                <br/>идеи и продукты, осуществляем
                                <br/>проекты различных направлений
                                <br/>от электронной коммерции,
                                <br/>до стартапов в сфере образования
                                <br/>и туризма.
                            </h6>
                        </div>
                        <div className="about--general--page__img1">
                            <div className="about--general__img1">
                                <img className="about--general__img1--imeg" src={com} alt=""/>
                                <div className="about--general__f">
                                </div>
                            </div>
                            <div className="about--general--page__img2">
                                <img src={com2} alt=""/>
                            </div>
                        </div>


                        </div>
                    <div className="about--general__text2">
                        <h6> Для достижения своих целей
                            мы используем передовые
                            технологии и методологии.</h6>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default about;