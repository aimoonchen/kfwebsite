import React, { Component } from 'react'
import Layout from '@theme/Layout';
import Scene from "../../../components/Showcase/Scene"

export default class Android extends Component {
    render() {
        return (
            <Layout title="Android">
                <Scene path="./android"/>
            </Layout>
        )
    }
}
