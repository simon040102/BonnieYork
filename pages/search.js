import React, { useState } from 'react';
import Image from 'next/image';

import Layout from '../modules/layout';

import Search from '../src/images/search.svg';
import SearchResult from '../components/searchResult';
const search = () => {
  const [page, setPage] = useState('area');
  return (
    <Layout title="邦尼約克BonnieYork 店家搜尋">
      <div className="container mx-auto w-11/12 pt-10 md:w-8/12 lg:w-6/12">
        <h2 className="mb-4 text-center text-4xl">店家搜尋</h2>
        <div className="mb-4 flex justify-center">
          <button
            className={` ${
              page === 'area' ? 'text-black' : 'text-gray-500'
            } mx-8`}
            onClick={() => setPage('area')}
          >
            依地區
          </button>
          <button
            className={` ${
              page === 'keywords' ? 'text-black' : 'text-gray-500'
            } mx-8`}
            onClick={() => setPage('keywords')}
          >
            依關鍵字
          </button>
        </div>

        <ul className="mx-auto mb-4 flex justify-center">
          {page === 'area' && (
            <>
              <li className="mx-2  w-3/12">
                <select
                  className="w-full border border-black text-center"
                  name="country"
                  id=""
                >
                  <option value="縣市">縣市</option>
                </select>
              </li>
              <li className="mx-2  w-3/12">
                <select
                  className="w-full border border-black text-center"
                  name="area"
                  id=""
                >
                  <option value="地區">地區</option>
                </select>
              </li>
              <li className="mx-2  w-3/12">
                <select
                  className="w-full border border-black text-center"
                  name="area"
                  id=""
                >
                  <option value="產業">產業</option>
                </select>
              </li>
            </>
          )}
          {page === 'keywords' && (
            <>
              <li className="mr-2 w-6/12">
                <input type="text" className="w-full border border-black" />
              </li>
            </>
          )}
          <div className="">
            <button>
              <Image src={Search} />
            </button>
          </div>
        </ul>
      </div>
      <SearchResult />
    </Layout>
  );
};

export default search;
