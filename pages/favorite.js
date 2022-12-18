import { useEffect } from 'react';
import axios from 'axios';
import Layout from '../modules/layout';
import SearchResult from '../components/searchResult';
import { useThem } from '../modules/context';

const favorite = () => {
  const { apiUrl, setLoading } = useThem();

  useEffect(() => {
    setLoading(true);
    const Authorization = localStorage.getItem('BonnieYork') || '';
    const config = {
      method: 'get',
      url: `${apiUrl}/customer/allmyfavorite`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
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
