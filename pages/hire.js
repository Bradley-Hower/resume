import React, { Fragment } from 'react';
import getConfig from 'next/config'
import { HireHeader } from '../components/Header';
import { HireNav } from '../components/Navbar';
import { HireIntro, HireAbout } from '../components/Intro';
import { Skills } from '../components/HireWork';
import { Footer } from '../components/Footer';
import { hireabout, hireintro, hirenavigation, HireTitle, hirework } from '../config/config';


const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <HireHeader hireheader={HireTitle} />
      <HireNav
        title={hirenavigation.name}
        links={hirenavigation.links}
      />
      <HireIntro
        greeting={hireintro.greeting}      
        title={hireintro.title}
        description={hireintro.description}
        description2={hireintro.description2}
        image={hireintro.image}
      />
      <HireAbout
        title={hireabout.title}
        description={hireabout.description}
        buttons={hireintro.buttons}
      />
      <Skills
        title={hirework.title}
        cards={hirework.cards}
      />

      <Footer
        links={hirenavigation.links}
      />
    </Fragment>
  );
}
