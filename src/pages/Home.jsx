import React from 'react';
import styled from 'styled-components'

import { Navbar, NavItem } from '../components/Navbar';
import image from '../assets/graphic.svg';
import GradientButton from '../components/GradientButton';

const Main = styled.div`
	max-width: 50%;
  padding: 100px;

  @media(max-width: 800px) {
    max-width: 90%;
  }
`;

const Img = styled.img`
  max-width: 80vw;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  shape-outside: url(${image});
  // max-height: 80vh;
`;

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main-section" id="home">
        <Main>
          <p className="landing-page-heading">i'm jiamin Guo.</p>
          {/* <p className="main-text">Extemely motivated  Computer Science student with 2.5 years of industry experience in the financial services technology sector.</p> */}
          <NavItem to="about" opClass="read-more" text={
            <GradientButton color="blue-dark">
              Read More
            </GradientButton>
          } />
        </Main>
        <Img src={image} />
      </div>
      <div className="about-section" id="about">

      </div>
      <div className="work-section" id="work">

      </div>
      <div className="contact-section" id="contact">

      </div>
    </main>
  );
}