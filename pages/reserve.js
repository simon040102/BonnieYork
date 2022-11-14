import React, { useState } from 'react'
import Layout from '../modules/layout'
import Finished from '../components/finished'
import Reserved from '../components/reserved'
import Head from 'next/head'
const reserve = () => {
    const [page,setPage]=useState('reserved')
  return (
    <>
    <Head>
        <title>我的預約</title>
        </Head>  
      <Layout>
        <div className="w-11/12 md:w-8/12 lg:w-4/12  mx-auto pt-10">
          <h2 className="text-4xl font-bold text-center mb-4">我的預約</h2>

          <div className="flex justify-center mb-4">
            <button
              className={` ${
                page == 'reserved' ? 'text-black' : 'text-gray-500'
              } mx-8`}
              onClick={() => setPage('reserved')}
            >
              未完成
            </button>
            <button
              className={` ${
                page == 'finished' ? 'text-black' : 'text-gray-500'
              } mx-8`}
              onClick={() => setPage('finished')}
            >
              已完成
            </button>
          </div>
          {page=='reserved' &&<Reserved/>}
          {page=='finished' && <Finished/>}
        </div>
      </Layout>
    </>
  );
}

export default reserve