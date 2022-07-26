import React from 'react';
import Layout from '@theme/Layout';

export default function Showcase() {
  return (
    <Layout title="Showcase" description="Showcase React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/showcase/index.jsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}