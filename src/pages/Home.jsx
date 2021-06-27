import React from 'react';
import styled from 'styled-components'

import { Navbar, NavItem } from '../components/Navbar';
import image from '../assets/graphic.svg';
import jiamin from '../assets/Jiamin.png';
import jiaminC from '../assets/JiaminCircle.png';
import GradientButton from '../components/GradientButton';

const Main = styled.div`
	max-width: 50%;
  padding: 100px;

  @media(max-width: 800px) {
    max-width: 90%;
    padding: 50px;
  }

  @media(max-width: 500px) {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
  }
`;

const MainImg = styled.img`
  max-width: 80vw;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  shape-outside: url(${image});
  // max-height: 80vh;
  overflow: hidden;

  @media(max-width: 800px) {
    max-width: 100vw;
  }

  @media(max-width: 550px) {
    width: 120vw;
  }
`;

const JiaminImg = styled.img`
  max-height: 50vh;
`;

const AboutMe = styled.div`
  padding: 20px 100px;

  @media(max-width: 800px) {
    max-width: 90%;
    padding: 20px 50px;
  }
`;

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-section" id="home">
        <Main>
          <p className="landing-page-heading">jiamin Guo</p>
          {/* <p className="main-text">Extemely motivated  Computer Science student with 2.5 years of industry experience in the financial services technology sector.</p> */}
          <p className="main-text">Creative. Passionate. Spontaneous.</p>
          <NavItem to="about" opClass="read-more" text={
            <GradientButton color="blue-dark">
              Read More
            </GradientButton>
          } />
        </Main>
        <MainImg src={image} />
      </div>
      <div className="about-section" id="about">
        <AboutMe>
          <JiaminImg src={jiaminC} alt="photo of jiamin" />
          <p className="main-text">
            Heyy! I'm currently a 3rd Year Compsci Student at UNSW and work as a
            technology cadet at UBS. I really enjoy playing volleyball, painting, playing with my cats, and eating lots of food :D <br />
            <a
              href="https://jiamin-guo.github.io/csesoc-elections/cat.html" target="_blank"
              rel="noreferrer">Click here</a> &nbsp;
             for photos of my two adorable cats!
          </p>
        </AboutMe>
      </div>
      <div className="work-section" id="work">

      </div>
      <div className="contact-section" id="contact">

      </div>
      <footer className="footer">
        <p>
        © Jiamin Guo 2021. <br />Vectors sourced from Freepik. Colour redesign by Jiamin.
        </p>
      </footer>
    </main>
  );
}