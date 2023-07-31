import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <span style={{fontSize:'3rem'}}>Hi there, my name is</span> <br /> Erickson Nthatu. <br />
        I am a Full-Stack Developer
      </SectionTitle>
      <SectionText style={{maxWidth: '450px'}}>
        I build things for the web<br />
        <span style={{fontSize: '1rem'}}>I am passionate about building excellent software that improves the lives of
          those around me. I have specialized in creating software for clients ranging from individuals,
          small businesses all the way to large enterprise corporations. What would you do if 
          you had a software expert available at your fingertips?
        </span>
      </SectionText>
      <Button onClick={() => window.location = 'mailto:kimathi.erickson@gmail.com'}>Get In Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;