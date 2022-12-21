/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import Layout from '../modules/layout';
import GetCity from '../components/areaData/getCity';
import GetArea from '../components/areaData/getArea';
import { useThem } from '../modules/context';
import SearchResult from '../components/searchResult';

const search = () => {
  const { apiUrl, setLoading } = useThem();
  const [result, setResult] = useState({});
  const [totalPage, setTotalPage] = useState('');
  const [select, setSelect] = useState({
    Page: 0,
    City: '',
    District: '',
    IndustryId: '',
    Keyword: '',
  });
  const [page, setPage] = useState('area');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelect((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork') || '';
    const config = {
      method: 'post',
      url: `${apiUrl}/customer/SearchStore`,
      headers: {
        Authorization,
      },
      data: select,
    };
    axios(config)
      .then((res) => {
        setResult(res.data);
        setTotalPage(res.data.TotalPages);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const showPage = () => {
    const pages = [];
    for (let i = 0; i < totalPage; i++) {
      pages.push(i + 1);
    }
    return pages.map((item) => (
      <li className={`text-2xl text-secondary `}>
        <button
          className={`${
            Number(select.Page) === Number(item) && 'font-bold underline'
          }`}
          onClick={() => {
            setSelect((preState) => ({
              ...preState,
              Page: item,
            }));
          }}
        >
          {item}
        </button>
      </li>
    ));
  };

  useEffect(() => {
    if (select.Page !== 0) {
      handleSearch();
    }
  }, [select.Page]);
  return (
    <Layout title="邦尼約克BonnieYork 店家搜尋">
      <div className="-mb-40 w-screen bg-bgColor px-5 pb-40">
        <div className="container mx-auto w-11/12 pt-20 md:w-8/12 lg:w-6/12">
          <h2 className="mb-4 text-center text-4xl">店家搜尋</h2>
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

          <ul className="mx-auto  mb-8 flex justify-center">
            {page === 'area' && (
              <>
                <li className="mx-2  w-3/12">
                  <select
                    className="h-12 w-full rounded-md  text-start indent-4 shadow-md"
                    name="City"
                    id=""
                    value={select.City}
                    onChange={handleChange}
                  >
                    <option value="縣市">縣市</option>
                    <GetCity />
                  </select>
                </li>
                <li className="mx-2  w-3/12">
                  <select
                    className="h-12 w-full rounded-md  text-start indent-4 shadow-md"
                    name="District"
                    id=""
                    value={select.District}
                    onChange={handleChange}
                  >
                    <option value="地區">地區</option>
                    <GetArea city={select?.City} />
                  </select>
                </li>
                <li className="mx-2  w-3/12">
                  <select
                    className="h-12 w-full rounded-md  text-start indent-4 shadow-md"
                    name="IndustryId"
                    id=""
                    value={select.IndustryId}
                    onChange={handleChange}
                  >
                    <option value="產業">產業</option>
                    <option value="1">美髮沙龍</option>
                    <option value="2">美睫美甲</option>
                    <option value="3">推拿按摩</option>
                    <option value="4">家教老師</option>
                    <option value="5">手工製作</option>
                    <option value="6">美妝美容</option>
                    <option value="7">健身瑜伽</option>
                    <option value="8">個人工作室</option>
                  </select>
                </li>
              </>
            )}
            {page === 'keywords' && (
              <li className="mr-2 w-6/12">
                <input
                  type="text"
                  name="Keyword"
                  value={select.Keyword}
                  className="h-12 w-full rounded-md border-black indent-6 text-xl shadow-md"
                  onChange={handleChange}
                />
              </li>
            )}
            <button
              className=" flex h-12 w-32 justify-center gap-4 rounded-lg bg-secondary py-1   text-white"
              onClick={handleSearch}
            >
              <p className="mt-2">搜尋</p>
              <SearchOutlinedIcon className="mt-2" />
            </button>
          </ul>
        </div>
        <div>
          <SearchResult Result={result.TheResult} handleSearch={handleSearch} />
        </div>
        <ul className="flex justify-center gap-3">{showPage()}</ul>
      </div>
    </Layout>
  );
};

export default search;
