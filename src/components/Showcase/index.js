import React, { Component } from 'react'
import List from "./List"
import Scene from "./Scene"
import {
  MemoryRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class Showcase extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch> 
                        <Route path="/showcase" strict exact component={List} />
                        <Route path="/showcase/demo" strict exact component={Scene} />
                        <Route path="/showcase/mobagame" strict exact component={Scene} />
                        <Route path="/showcase/android" strict exact component={Scene} />
                        <Route path="/showcase/ios" strict exact component={Scene} />
                    </Switch>
                </Router>
            </>
        );
    }
}