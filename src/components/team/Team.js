import React, { Component } from "react";
import { BsInstagram} from "react-icons/bs";
import red from '../../assets/img/red.png'
import s from '../../assets/img/syrgabek.png'
import Slider from "react-slick";
import {FaTelegramPlane} from "react-icons/fa";

const Team = () => {


    return (
        <div className="section">
            <h1 className="section--container--page--sub">Наша команда</h1>
            <div className="section--container">
                <div className="section--container--page">
                    <div className="section--container--page--slick">
                        <img src={s}/>
                        <h1 className="section--container--page--slick--title">Сейитканов Сыргабек</h1>
                        <span className="section--container--page--slick--span">
                            <p className="section--container--page--slick--span--text">
                                UX/UI desinger
                            </p>
                            <BsInstagram/>
                            <FaTelegramPlane/>
                        </span>
                    </div>
                </div>
                <div className="section--container--page">
                    <div className="section--container--page--slick">
                        <img src={s}/>
                        <h1 className="section--container--page--slick--title">Сейитканов Сыргабек</h1>
                        <span className="section--container--page--slick--span">
                            <p className="section--container--page--slick--span--text">
                                UX/UI desinger
                            </p>
                            <BsInstagram/>
                            <FaTelegramPlane/>
                        </span>
                    </div>
                </div>
                <div className="section--container--page">
                    <div className="section--container--page--slick">
                        <img src={s}/>
                        <h1 className="section--container--page--slick--title">Сейитканов Сыргабек</h1>
                        <span className="section--container--page--slick--span">
                            <p className="section--container--page--slick--span--text">
                                UX/UI desinger
                            </p>
                            <BsInstagram/>
                            <FaTelegramPlane/>
                        </span>
                    </div>
                </div>
                <div className="section--container--page">
                    <div className="section--container--page--slick">
                        <img src={s}/>
                        <h1 className="section--container--page--slick--title">Сейитканов Сыргабек</h1>
                        <span className="section--container--page--slick--span">
                            <p className="section--container--page--slick--span--text">
                                UX/UI desinger
                            </p>
                            <BsInstagram/>
                            <FaTelegramPlane/>
                        </span>
                    </div>
                </div>
            </div>



        </div>



    )

};

export default Team;