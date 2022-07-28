import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Placeholder from 'react-bootstrap/Placeholder';
// import Card from 'react-bootstrap/Card';
import clsx from 'clsx';
import styles from './styles.module.css';
const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        KFEngine was designed to be easily installed and
        used to get your game up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on development efficiency',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        KFEngine lets you focus on your game logic. supports platform: Android/iOS/Web/Windows/Linux/Mac.
      </>
    ),
  },
  {
    title: 'Powered by Urho3D/BGFX',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Integrates FairyGUI/RMLUI/Effekseer. supports development in Lua/Python/C#/C++ language.
      </>
    ),
  },
];
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function KFEngineFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowSandbox() {
  return (
    // <Card>
    //   <Card.Body className="px-4 py-5 my-5 text-center">
    //     <Card.Title><h2 className="display-4 fw-bold">Sandbox</h2></Card.Title>
    //     <Card.Text>
    //       This is a wider card with supporting text below as a natural lead-in
    //       to additional content. This content is a little bit longer.
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Img variant="bottom" src="/img/sandbox.png" alt="Sandbox image" />
    // </Card>
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">KFStudio</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Quickly design and publish your game with KFStudio.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
        <br/>
      </div>
      <img className="shadow-lg d-block mx-auto mb-4 rounded" src="/img/sandbox.png"/>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <Container className="container marketing">
      {/* <Row className="row">
        <Col className="col-lg-4">
          <Placeholder className="rounded-circle" style={{ width:"140px", height:"140px", background:"#777", color:"#777" }} />
          <h2>Heading</h2>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </Col>
        <Col className="col-lg-4">
          <Placeholder className="rounded-circle" style={{ width:"140px", height:"140px", background:"#777", color:"#777" }} />
          <h2>Heading</h2>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </Col>
        <Col className="col-lg-4">
          <Placeholder  className="rounded-circle" style={{ width:"140px", height:"140px", background:"#777", color:"#777" }} />
          <h2>Heading</h2>
          <p>And lastly this, the third column of representative placeholder content.</p>
          <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </Col>
      </Row> */}
      <KFEngineFeatures/>
      <ShowSandbox/>
      <hr className="featurette-divider"/>
      <Row className="row featurette">
        <Col className="col-md-6 order-md-2">
          <h2 className="featurette-heading">Effekseer</h2>
          <p className="lead">Effekseer is a tool that allows easy creation of beautiful particle effects for games and movies.</p>
          {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">HomePage</button> */}
          <a href="http://effekseer.github.io/en/" target="_blank">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">HomePage</button>
          </a>
        </Col>
        <Col className="col-md-6 order-md-1">
          <img className="shadow bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" src="/img/effekseer.png" style={{width:"640px", height:"360px", background:"#eee", color:"#aaa"}} />
        </Col>
      </Row>
      <hr className="featurette-divider"/>
      <Row className="row featurette">
        <Col className="col-md-6">
          <h2 className="featurette-heading">FairyGUI</h2>
          <p className="lead">Professional game UI solution, Designer-friendly Editor, Support 10+ game engines, Help you double your productivity</p>
          {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">HomePage</button> */}
          <a href="https://www.fairygui.com/" target="_blank">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">HomePage</button>
          </a>
        </Col>
        <Col className="col-md-6">
          <img className="shadow bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded" src="/img/fairygui.png" style={{width:"618px", height:"320px", background:"#eee", color:"#aaa"}} />
        </Col>
      </Row>
      <hr className="featurette-divider"/>
    </Container>
  );
}