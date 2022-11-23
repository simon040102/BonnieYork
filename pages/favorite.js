import React from 'react';

import Layout from '../modules/layout';

import SearchResult from '../components/searchResult';
const favorite = () => {
  return (
    <Layout title="我的最愛">
      <div className="container mx-auto w-full pt-10">
        <h2 className="mb-8 text-center text-4xl">我的最愛</h2>
        <SearchResult />
      </div>
    </Layout>
  );
};

export default favorite;
