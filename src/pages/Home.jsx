import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

import GradientButton from '../components/GradientButton';
import { Navbar, NavItem } from '../components/Navbar';
import bigImage from '../assets/graphic.svg';
import smallImage from '../assets/graphicSmall.svg';
import jiaminC from '../assets/JiaminCircle.png';
import jiaminBig from '../assets/Jiamin.png';
import cherry from '../assets/cherry-blossom.png';
import galaxy from '../assets/galaxy.jpg';
import marys from '../assets/st-marys.jpg';
import three from '../assets/three.jpg';
import contact from '../assets/contact.svg';


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
  shape-outside: url(${bigImage});
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
  max-height: 80vh;
  margin: 50px;

  @media(max-width: 800px) {
    max-height: 50vh;
    max-width: 90%;
    margin: 0px;
    flex-direction: column;
  }
`;

const ContactImg = styled.img`
  max-height: 50vh;
  max-width: 80vw;
`;

const AboutMe = styled.div`
  padding-right: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 100%;

  @media(max-width: 800px) {
    max-width: 90%;
    padding: 0px 50px;
    flex-direction: column;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 150px;
  align-items: center;
`;

const ArtContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ArtImg = styled.img`
  max-height: 30vh;
  padding: 15px;
  @media(max-width: 800px) {
    max-height: 20vh;
    padding: 8px;
  }
  @media(max-width: 400px) {
    max-height: 20vh;
    padding: 5px;
  }
`;

export default function Home() {
  const isMobileSmall = useMediaQuery({ query: '(max-width: 500px)' });
  const isJiaminSmall = useMediaQuery({ query: '(max-width: 800px)' });
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
        <MainImg src={isMobileSmall ? smallImage: bigImage} />
      </div>
      <div className="about-section" id="about">
        <AboutMe>
          <JiaminImg src={isJiaminSmall ? jiaminC : jiaminBig } alt="photo of jiamin" />
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
        <p className="landing-page-heading">my art!</p>
        <a href="https://drive.google.com/drive/folders/1ZIzx0Sv2yUD3Q_t3AH1lfb3-LRWuBEdT?usp=sharing" target="_blank" rel="noreferrer">
        <p className="main-text">Click to see more</p>
          <ArtContainer>
            <ArtImg src={cherry} alt='cherry blossom photomanipulation' />
            <ArtImg src={galaxy} alt='galaxy acrylic' />
            <ArtImg src={three} alt='three watercolours' />
            <ArtImg src={marys} alt='st-marys cathedral' />
          </ArtContainer>
        </a>
      </div>
      <div className="contact-section" id="contact">
        <p className="contact-heading">contact me</p>
        <IconContainer>
          <a href="https://www.facebook.com/JiaminGu0/" target="_blank" rel="noreferrer">
            <FacebookIcon style={{ color: "white" }} fontSize="large"/>
          </a>
          <a href="https://www.linkedin.com/in/jia-min-guo-a24926215/" target="_blank" rel="noreferrer">
            <LinkedInIcon style={{ color: "white" }} fontSize="large"/>
          </a>
          <a href="mailto: jiamin.guo@outlook.com" target="_blank" rel="noreferrer">
            <EmailIcon style={{ color: "white" }} fontSize="large"/>
          </a>
        </IconContainer>
        <ContactImg src={contact} alt="contact image" />
      </div>
      <footer className="footer">
        <p>
        © Jiamin Guo 2021. <br />Vectors sourced from Freepik. Colour redesign by Jiamin.
        </p>
      </footer>
    </main>
  );
}