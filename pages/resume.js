import React, { Fragment } from 'react';
import getConfig from 'next/config'
import { Nav } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Resume } from '../components/Resume';
import { navigation, resume } from '../config/config';


const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Resume
        title={resume.title}
        link={resume.link}
      />

      <Footer />
    </Fragment>
  );
}
