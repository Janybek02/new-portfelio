
import React from 'react';
import react from '../../assets/img/react.svg'
import redux from '../../assets/img/redux.svg'
import ts from '../../assets/img/ts.svg'
import sass from '../../assets/img/sass.svg'
import figma from '../../assets/img/figma.svg'
import ps from '../../assets/img/ps.svg'
import git from '../../assets/img/git.svg'



const Tools = () => {


    return (
        <section id='tools'>
            <div className="container">
                <div className="tools--general">
                    <div className='tools--general_taps'>
                        <label htmlFor="all"><h1>ALL</h1></label>
                        <label htmlFor="front"><h1>FRONT-END</h1></label>
                        <label htmlFor="ux"><h1>UX/UI design</h1></label>
                    </div>
                    <div className="tools--general__block">
                        <input type="radio" name="tabs" id="all"/>
                        <input type="radio" name="tabs" id="front"/>
                        <input type="radio" name="tabs" id="design"/>

                        <div className='tools--general__block-block1'>
                            <div className='tools--general__block-block1_img'>
                                <img src={react} alt="" className="tabs1"/>
                                <p>Photoshop</p>
                            </div>
                            <div className='tools--general__block-block1_img'>
                                <img src={figma} alt="" className="front"/>
                                <p>Photoshop</p>
                            </div>
                            <div className='tools--general__block-block1_img'>
                                <img src={redux} alt="" className="front"/>
                                <p>Photoshop</p>
                            </div>
                            <div className='tools--general__block-block1_img'>
                                <img src={ts} alt="" className="front"/>
                                <p>Photoshop</p>
                            </div>
                            <div className='tools--general__block-block1_img'>
                                <img src={ps} alt="" className="ux"/>
                                <p>Photoshop</p>
                            </div>
                            <div className='tools--general__block-block1_img'>
                                <img src={git} alt="" className="ux"/>
                                <p>Photoshop</p>
                            </div>
                            <div className='tools--general__block-block1_img'>
                                <img src={sass} alt="" className="ux"/>
                                <p>Photoshop</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;