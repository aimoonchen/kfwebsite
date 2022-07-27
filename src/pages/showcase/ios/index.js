import React, { Component } from 'react'
import Layout from '@theme/Layout';
import Scene from "../../../components/Showcase/Scene"

export default class IOS extends Component {
    render() {
        return (
            <Layout title="IOS">
                <Scene path="./ios"/>
            </Layout>
        )
    }
}
