import React, { Component } from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
//import { Link, Switch, Route } from "react-router-dom";
import Link from '@docusaurus/Link';
import 'bootstrap/dist/css/bootstrap.min.css';

import Scene from "../Scene"

export default class List extends Component {
    render() {
        const showcaseinfo = [
            {image:"img/showcase/Demo.png", title: "Technique Demo", discription: "Baked lighting, PBR, Terrain and water, FairyGUI, Effekseer.", path: "/showcase/demo"},
            {image:"img/showcase/MobaGame.png", title: "MobaGame", discription: "A moba game demo.", path: "/showcase/mobagame"},
            {image:"img/showcase/Android.png", title: "Android", discription: "Android KFPlayer", path: "/showcase"},
            {image:"img/showcase/iOS.png", title: "iOS", discription: "iOS KFPlayer", path: "/showcase"},
        ];
        return (
            <div>
                {/* <Switch>
                    <Route path="/showcase/bakedlighting" component={Scene} />
                    <Route path="/showcase/pbr" component={Scene} />
                    <Route path="/showcase/physics" component={Scene} />
                    <Route path="/showcase/water" component={Scene} />
                    <Route path="/showcase/fairygui" component={Scene} />
                    <Route path="/showcase/effect" component={Scene} />
                    <Route path="/showcase/demo" component={Scene} />
                </Switch> */}
                <Container fluid="md">
                    <Row className="g-4" style = {{marginLeft:"5%", marginRight:"5%"}}>
                        {showcaseinfo.map((item, index) => (
                            <Col key={index}>
                                <Card style = {{width:"512px"}}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>{item.discription}</Card.Text>
                                    </Card.Body>
                                    <div>
                                        {/* Link tag With out parameter */}
                                        {/* <Link to="/about">About</Link> */}
                                        {/* <Link to={{pathname: "/showcase/bakedlighting", state: {path: item.path}}}> */}
                                        <Link to={item.path}>
                                            <Button variant="primary" style = {{marginLeft:"3%", marginRight:"3%", width:"44%"}}>Run</Button>
                                        </Link>
                                        <Button variant="primary" style = {{marginLeft:"3%", marginRight:"3%", width:"44%"}}>SourceCode</Button>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}
