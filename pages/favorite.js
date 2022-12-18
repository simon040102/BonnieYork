/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../modules/layout';
import SearchResult from '../components/searchResult';
import { useThem } from '../modules/context';

const favorite = () => {
  const { apiUrl, setLoading } = useThem();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState('');
  const [result, setResult] = useState({});

  const showPage = () => {
    const pages = [];
    for (let i = 0; i < totalPage; i++) {
      pages.push(i + 1);
    }
    return pages.map((item) => (
      <li className={`text-2xl text-secondary `}>
        <button
          className={`${
            Number(page) === Number(item) && 'font-bold underline'
          }`}
          onClick={() => {
            setPage(Number(item));
          }}
        >
          {item}
        </button>
      </li>
    ));
  };

  const handleSearch = () => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork') || '';
    const config = {
      method: 'get',
      url: `${apiUrl}/customer/allmyfavorite?page=${page}`,
      headers: {
        Authorization,
      },
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

  useEffect(() => {
    handleSearch();
  }, [page]);
  return (
    <Layout title="我的最愛">
      <div className="container mx-auto w-full pt-10">
        <h2 className="mb-8 text-center text-4xl">我的最愛</h2>
        <SearchResult Result={result.theResult} handleSearch={handleSearch} />
        <ul className="flex justify-center gap-3">{showPage()}</ul>
      </div>
    </Layout>
  );
};

export default favorite;
