import React from 'react'
import Layout from '../modules/layout'
import SearchResult from '../components/searchResult'
import Head from 'next/head'
const favorite = () => {
  return (
    <>
    <Head>
      <title>我的最愛</title>
    </Head>
      <Layout>
        <div className="container w-full mx-auto pt-10">
            <h2 className='text-4xl text-center mb-8'>我的最愛</h2>
         <SearchResult/>
        </div>
      </Layout>
    </>
  );
}

export default favorite