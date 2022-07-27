import React, { Component } from 'react'
import Layout from '@theme/Layout';
import Scene from "../../../components/Showcase/Scene"

export default class Demo extends Component {
    render() {
        return (
            <Layout title="Demo">
                <Scene path="./demo"/>
            </Layout>
        )
    }
}
