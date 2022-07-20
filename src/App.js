import React from 'react';
import "./style/style.scss"
import "./style/media.scss"
import Hero from "./components/Hero/hero";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Consulate from "./components/consulate/consulate";
import Portfolio from "./components/portfolio/portfolio";
import Team from "./components/team/Team";
import Tools from "./components/tools/tools";
import Contact from "./components/contact/contact";

const App = () => {
    return (
        <>
            <Header/>
          <Hero/>
            <About/>
            <Services/>
            <Portfolio/>
            <Team/>
            <Tools/>
            <Contact/>
            <Consulate/>
          <Footer/>


        </>
    );
};

export default App