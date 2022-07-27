import React, { Component } from 'react'
import Layout from '@theme/Layout';
import Scene from "../../../components/Showcase/Scene"

export default class MobaGame extends Component {
    render() {
        return (
            <Layout title="MobaGame">
                <Scene path="./mobagame"/>
            </Layout>
        )
    }
}
