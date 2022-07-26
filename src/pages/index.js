// import React from 'react';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css'

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Get Started - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }



function HomepageHeader() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    {/* <div style={{backgroundColor: "#1b1b1d"}}> */}
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/bakedlighting.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>BakedLighting</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/pbr.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>PBR</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/effekseer.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Effekseer</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/fairygui.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>FairyGUI</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main style={{backgroundColor: "#1b1b1d"}}> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
