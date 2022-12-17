/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from '../modules/layout';

import Finished from '../components/finished';
import Reserved from '../components/reserved';
import { useThem } from '../modules/context';

const reserve = () => {
  const [page, setPage] = useState('reserved');
  const [reserveArray, SetReserveArray] = useState({});
  const { apiUrl, setLoading } = useThem();

  console.log(reserveArray);

  useEffect(() => {
    const Authorization = localStorage.getItem('BonnieYork');
    setLoading(true);
    const config = {
      method: 'get',
      url: `${apiUrl}/customer/reservestate`,
      headers: {
        Authorization,
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
        setLoading(false);
        SetReserveArray(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <Layout title="我的預約">
      <div className="mx-auto w-11/12 pt-20  md:w-8/12 lg:w-4/12">
        <h2 className="mb-4 text-center text-4xl font-bold">我的預約</h2>

        <div className="mb-4 flex justify-center">
          <button
            className={` ${
              page === 'reserved'
                ? 'border-b-2 text-secondary'
                : ' text-unSelect'
            } mx-8`}
            onClick={() => setPage('reserved')}
          >
            未完成
          </button>
          <button
            className={` ${
              page === 'finished'
                ? 'border-b-2 text-secondary'
                : ' text-unSelect'
            } mx-8`}
            onClick={() => setPage('finished')}
          >
            已完成
          </button>
        </div>
        {page === 'reserved' && <Reserved array={reserveArray.UndoneReserve} />}
        {page === 'finished' && <Finished array={reserveArray.FinishReserve} />}
      </div>
    </Layout>
  );
};

export default reserve;
