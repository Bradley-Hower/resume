import React, { Fragment } from 'react';
import getConfig from 'next/config'
import { HireNav } from '../components/Navbar';
import { Resume } from '../components/Resume';
import { hirenavigation, resume } from '../config/config';


const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <HireNav
        title={hirenavigation.name}
        links={hirenavigation.links}
      />
      <Resume
        title={resume.title}
        link={resume.link}
      />
    </Fragment>
  );
}
