import React from 'react';
import der from '../../assets/img/portfolio1.jpg'
import der1 from '../../assets/img/portfolio2.jpg'
import der2 from '../../assets/img/portfolio3.jpg'
import der3 from '../../assets/img/portfolio4.jpg'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="portfolio--general">
                    <h1>Портфолио</h1>
                    <div className="portfolio--general--div">
                        <div className="portfolio--general--div__imeg">
                            <img className="portfolio--general--div__imeg--img" src={der}/>
                            <div className="portfolio--general--div__imeg--page">
                                <div className="portfolio--general--div__imeg--page--overly">
                                    Lorem ipsum
                                </div>
                                <p className="portfolio--general--div__imeg--page--description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis est.
                                    Nullam posuere, dui at feugiat rhoncus, neque sem iaculis felis, vel pretium velit
                                    ante at nunc. In hac habitasse platea dictumst.
                                </p>
                            </div>

                        </div>
                        <div className="portfolio--general--div__imeg">
                            <img className="portfolio--general--div__imeg--img" src={der1}/>
                            <div className="portfolio--general--div__imeg--page">
                                <div className="portfolio--general--div__imeg--page--overly">
                                    Lorem ipsum
                                </div>
                                <p className="portfolio--general--div__imeg--page--description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis est.
                                    Nullam posuere, dui at feugiat rhoncus, neque sem iaculis felis, vel pretium velit
                                    ante at nunc. In hac habitasse platea dictumst.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="portfolio--general--div">
                        <div className="portfolio--general--div__imeg">
                            <img className="portfolio--general--div__imeg--img" src={der2}/>
                            <div className="portfolio--general--div__imeg--page">
                                <div className="portfolio--general--div__imeg--page--overly">
                                    Lorem ipsum
                                </div>
                                <p className="portfolio--general--div__imeg--page--description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis est.
                                    Nullam posuere, dui at feugiat rhoncus, neque sem iaculis felis, vel pretium velit
                                    ante at nunc. In hac habitasse platea dictumst.
                                </p>
                            </div>
                        </div>
                        <div className="portfolio--general--div__imeg">
                            <img className="portfolio--general--div__imeg--img" src={der3}/>
                            <div className="portfolio--general--div__imeg--page">
                                <div className="portfolio--general--div__imeg--page--overly">
                                    Lorem ipsum
                                </div>
                                <p className="portfolio--general--div__imeg--page--description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut turpis est.
                                    Nullam posuere, dui at feugiat rhoncus, neque sem iaculis felis, vel pretium velit
                                    ante at nunc. In hac habitasse platea dictumst.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='portfolio--general__imeg--btn'>
                        <button>Все проекты</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;