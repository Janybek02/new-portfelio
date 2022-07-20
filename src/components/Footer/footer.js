import React from 'react';
import aa from '../../assets/img/Group 123.png'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer--general">
                    <div className="footer--general__t">
                        <div className="footer--general__smart">
                            <img className="footer--general__smart--img" src={aa} alt=""/>
                        </div>
                        <div className="footer--general__text1">
                            <h1 className="footer--general__text1--sub" href="/">РАЗДЕЛЫ</h1>
                            <a className="footer--general__text1--link" href="/">Главная</a>
                            <a className="footer--general__text1--link" href="/">О нас </a>
                            <a className="footer--general__text1--link" href="/">Услуги</a>
                            <a className="footer--general__text1--link" href="/">Портфолио</a>
                            <a className="footer--general__text1--link" href="#">Наша Команда</a>
                            <a className="footer--general__text1--link" href="#">Конатакты </a>
                        </div>
                        <div className="footer--general__text2">
                            <h1 className="footer--general__text2--sub" >КОНТАКТЫ</h1>
                            <a className="footer--general__text2--link" href="/"> motionwebteam@gmail.com</a>
                            <a className="footer--general__text2--link" href="mailto:janybek02x@gmail.com?subject=subject text">janybek02x@gmail.com</a>
                            <a className="footer--general__text2--link" href="https://motion-web.io/"> motion-web</a>
                            <a className="footer--general__text2--link" href="https://web.telegram.org/z/#-1685140016"> motion-web it club</a>
                            <a className="footer--general__text2--link" href="tel:+ 996 500 708 610">+996 779 182 232</a>
                        </div>

                    </div>

                    <h6>© Copyright "Smart Devs  IT Club " 2022</h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;