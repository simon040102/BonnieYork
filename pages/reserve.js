import React, { useState } from 'react';

import Layout from '../modules/layout';

import Finished from '../components/finished';
import Reserved from '../components/reserved';

const reserve = () => {
  const [page, setPage] = useState('reserved');
  return (
    <>
      <Layout title="我的預約">
        <div className="mx-auto w-11/12 pt-10  md:w-8/12 lg:w-4/12">
          <h2 className="mb-4 text-center text-4xl font-bold">我的預約</h2>

          <div className="mb-4 flex justify-center">
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
          {page == 'reserved' && <Reserved />}
          {page == 'finished' && <Finished />}
        </div>
      </Layout>
    </>
  );
};

export default reserve;
