import React, { Fragment } from 'react';
import getConfig from 'next/config'
import { Header } from '../components/Header';
import { Nav } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO, navigation } from '../config/config';



const { publicRuntimeConfig } = getConfig()

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <div className="blogpiece">
        <div className="d-flex flex-column justify-content-start py-5 px-5 container text-center">
        <h1>Nothing to see here, yet.</h1>
        </div>
      </div>
      <Footer
        links={navigation.links}
      />
    </Fragment>
  );
}
