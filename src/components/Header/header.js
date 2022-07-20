import React from 'react';
import arr from '../../assets/img/logo.svg'

const Header = () => {
    return (
        <header id="header" >
            <div className="container">
                <div className="header--general">
                    <div className="header--general__n1">
                        <img className="header--general__n1--img" src={arr} alt=""/>
                    </div>
                    <div className="header--general__navbar">
                        <a href="#" className="header--general__navbar--nav">Главная</a>
                        <a href="#" className="header--general__navbar--nav">О нас </a>
                        <a href="#" className="header--general__navbar--nav">Услуги</a>
                        <a href="#" className="header--general__navbar--nav">Портфолио</a>
                        <a href="#" className="header--general__navbar--nav">Наша Команда</a>
                        <a href="#" className="header--general__navbar--nav">Конатакты</a>
                    </div>
                    <div className="header--general__burger">
                       <span className=" header--general__burger1">
                <a href="#">
                    <i className="ri-menu-line"> </i></a>
                       </span>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;