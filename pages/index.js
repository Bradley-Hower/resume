import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Programs } from '../components/Offerings';
import { Footer } from '../components/Footer';
import { about, intro, navigation, SEO, offerings } from '../config/config';
import { Header } from '../components/Header';



export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        greeting={intro.greeting}      
        title={intro.title}
        description={intro.description}
        description2={intro.description2}
        image={intro.image}
      />
      <About
        title={about.title}
        description={about.description}
        buttons={intro.buttons}
      />
      <Programs
        title={offerings.title}
        subtitle={offerings.subtitle}
        notice={offerings.notice}
        cards={offerings.cards}
        buttons={offerings.buttons}
        checkboxes={offerings.checkboxes}
        program_notes={offerings.program_notes}
      />

      <Footer
        links={navigation.links}
      />
    </Fragment>
  );
}
