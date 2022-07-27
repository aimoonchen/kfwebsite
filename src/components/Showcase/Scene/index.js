import React, { Component } from 'react'
//import { Link, useLocation } from "react-router-dom";
import Link from '@docusaurus/Link';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import local_css from './index.module.css'
var current_script_filename = ""
export default class Scene extends Component {
    componentDidMount() {
        console.log("----Scene componentDidMount()")
        const prepare = document.createElement("script");
        prepare.src = "./prepare.js";
        //prepare.async = true;
        //prepare.onload = () => this.scriptLoaded();
        
        document.body.appendChild(prepare);

        const render_scene = document.createElement("script");
        render_scene.src = current_script_filename;//location.script_filename;//
        render_scene.async = true;
        //render_scene.onload = () => this.scriptLoaded();

        document.body.appendChild(render_scene);

        //this.setState({c0: prepare, c1: render_scene})
    }
    componentWillUnmount() {
        console.log("----Scene componentWillUnmount()")
        window.location.reload(false)
    }
    handleContextMenu(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    state = {}
    render() {
        console.log("----Scene render()")
        console.log(this.props)
        current_script_filename = this.props.path + "/main.js"//this.props.location.state.path + "/examplesRelease.js"
        console.log(current_script_filename)
        return (
            <div>
                <div className={local_css.spinner} id='spinner'></div>
                <div className={local_css.status} id="status">Downloading...</div>
                <div className={local_css.emscripten}>
                    <progress className={local_css.progress} value="0" max="100" id="progress" hidden={1}></progress>
                </div>
                <div class={local_css.emscripten_border}>
                    <canvas className={local_css.emscripten} id="canvas" onContextMenu={this.handleContextMenu} tabindex={-1}></canvas>
                </div>
                <textarea className={local_css.output} id="output" rows="8"></textarea>
                <Link to="/showcase">
				    <Button variant="primary">Back</Button>
			    </Link>
            </div>
        )
    }
}
