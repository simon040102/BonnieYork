import React, { useState } from 'react';
import Layout from '../modules/layout';
import Image from 'next/image';
import Search from '../src/images/search.svg'
import SearchResult from '../components/searchResult';
import Head from 'next/head';
const search = () => {
  const [page, setPage] = useState('area');
  return (
    <div>
      <Head>
        <title>邦尼約克Bonnie York 店家搜尋</title>
      </Head>
      <Layout>
        <div className="container mx-auto w-11/12 md:w-8/12 lg:w-6/12 pt-10">
          <h2 className="text-center text-4xl mb-4">店家搜尋</h2>
          <div className="flex justify-center mb-4">
            <button
              className={` ${
                page == 'area' ? 'text-black' : 'text-gray-500'
              } mx-8`}
              onClick={() => setPage('area')}
            >
              依地區
            </button>
            <button
              className={` ${
                page == 'keywords' ? 'text-black' : 'text-gray-500'
              } mx-8`}
              onClick={() => setPage('keywords')}
            >
              依關鍵字
            </button>
          </div>

          <ul className="flex justify-center mx-auto mb-4">
            {page == 'area' && (
              <>
                <li className="w-3/12  mx-2">
                  <select
                    className="border border-black w-full text-center"
                    name="country"
                    id=""
                  >
                    <option value="縣市">縣市</option>
                  </select>
                </li>
                <li className="w-3/12  mx-2">
                  <select
                    className="border border-black w-full text-center"
                    name="area"
                    id=""
                  >
                    <option value="地區">地區</option>
                  </select>
                </li>
                <li className="w-3/12  mx-2">
                  <select
                    className="border border-black w-full text-center"
                    name="area"
                    id=""
                  >
                    <option value="產業">產業</option>
                  </select>
                </li>
              </>
            )}
            {page == 'keywords' && (
              <>
                <li className="w-6/12 mr-2">
                  <input type="text" className="border border-black w-full" />
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
    </div>
  );
};

export default search;
