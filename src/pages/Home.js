import React from 'react'
import Layout from '../components/layout/Layout';
import CardHome from '../components/home-page/CardHome';

export default function Home() {
  
  return (
    <Layout>
      <div class="px-50 py-10 shadow- flex space-x-5 bg-white rounded-lg border border-gray-200">
        <CardHome className=""/>
        <CardHome/>
        <CardHome/>
        <CardHome/>
      </div>
    </Layout>
  );
}
