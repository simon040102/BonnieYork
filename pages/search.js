import React, { useState } from 'react';
import Image from 'next/image';

import Layout from '../modules/layout';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import SearchResult from '../components/searchResult';
const search = () => {
  const [page, setPage] = useState('area');
  return (
    <Layout title="邦尼約克BonnieYork 店家搜尋">
      <div className="-mb-40 w-screen bg-bgColor px-5 pb-40">
        <div className="container mx-auto w-11/12 pt-10 md:w-8/12 lg:w-6/12">
          <h2 className="mb-4 text-center text-2xl">店家搜尋</h2>
          <div className="mb-4 flex justify-center gap-10">
            <button
              className={` ${
                page === 'area'
                  ? 'bg-secondary text-white '
                  : 'border border-secondary text-secondary'
              } rounded-full px-10 py-1`}
              onClick={() => setPage('area')}
            >
              依地區
            </button>
            <button
              className={` ${
                page === 'keywords'
                  ? 'bg-secondary text-white '
                  : 'border border-secondary text-secondary'
              } rounded-full px-10 py-1`}
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
                    className="h-8 w-full rounded-md  text-start indent-4 shadow-md"
                    name="country"
                    id=""
                  >
                    <option value="縣市">縣市</option>
                  </select>
                </li>
                <li className="mx-2  w-3/12">
                  <select
                    className="h-8 w-full rounded-md  text-start indent-4 shadow-md"
                    name="area"
                    id=""
                  >
                    <option value="地區">地區</option>
                  </select>
                </li>
                <li className="mx-2  w-3/12">
                  <select
                    className="h-8 w-full rounded-md  text-start indent-4 shadow-md"
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
                  <input
                    type="text"
                    className="h-8 w-full rounded-md  border-black shadow-md"
                  />
                </li>
              </>
            )}
            <button className=" flex w-32 justify-center gap-4 rounded-lg bg-secondary py-1  text-white">
              <p>搜尋</p>
              <SearchOutlinedIcon />
            </button>
          </ul>
        </div>
        <SearchResult />
      </div>
    </Layout>
  );
};

export default search;
